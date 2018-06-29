package com.hrmstracker.security.users;

import com.hrmstracker.security.roles.Role;
import com.hrmstracker.security.roles.RoleRepository;
import com.hrmstracker.utilities.ApiResponse;
import com.hrmstracker.web.branch.Branch;
import com.hrmstracker.web.branch.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BranchRepository branchRepository;

    @GetMapping("/authenticated")
    public ResponseEntity<UserDTO> getAccount() {
        return Optional.ofNullable(userService.getUserWithAuthorities())
                .map(user -> new ResponseEntity<>(new UserDTO(user), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@Valid @RequestBody UserDTO userDTO) {
        final User registered = userService.createUser(userDTO);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(registered.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getUsers(Pageable pageable) {
        final Page<UserDTO> page = userRepository.findAll(pageable).map(UserDTO::new);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    @GetMapping("/user/roles")
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @GetMapping("/user/branches")
    public List<Branch> getBranches() {
        return branchRepository.findAll();
    }
}
