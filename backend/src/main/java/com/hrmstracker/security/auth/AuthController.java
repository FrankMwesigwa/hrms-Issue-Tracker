package com.hrmstracker.security.auth;

import com.hrmstracker.security.jwt.JWTConfigurer;
import com.hrmstracker.security.jwt.JWTTokenDTO;
import com.hrmstracker.security.jwt.JwtFilter;
import com.hrmstracker.security.jwt.TokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.Serializable;
import java.util.Collections;

@RestController
@RequestMapping("/api")
public class AuthController implements Serializable {

    private final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authorize(@Valid @RequestBody LoginDTO loginDTO, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                loginDTO.getUsername(),
                loginDTO.getPassword()
        );

        try {
            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.createToken(authentication);
            String refreshJwt = tokenProvider.createRefreshToken(authentication);
            response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
            return ResponseEntity.ok(new JWTTokenDTO(jwt, refreshJwt));
        } catch (AuthenticationException exception) {
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", exception.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
        }
    }

    /**
     * GET /api/auth/token : Get new fresh token in order to prolong user session
     */
    @GetMapping(value = "/auth/token")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = JwtFilter.resolveToken(request);
        if (StringUtils.hasText(refreshToken)) {
            if (tokenProvider.validateToken(refreshToken)) {
                Authentication authentication = tokenProvider.getAuthentication(refreshToken);
                //new tokens
                String jwt = tokenProvider.createToken(authentication);
                String refreshJwt = tokenProvider.createRefreshToken(authentication);
                response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
                return ResponseEntity.ok(new JWTTokenDTO(jwt, refreshJwt));
            }
        }
        return new ResponseEntity<>(Collections.singletonMap("AuthenticationException", "Invalid token refresh."), HttpStatus.UNAUTHORIZED);
    }

}
