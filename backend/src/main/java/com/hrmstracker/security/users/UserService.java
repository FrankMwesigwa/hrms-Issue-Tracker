package com.hrmstracker.security.users;

import com.hrmstracker.security.auth.SecurityUtils;
import com.hrmstracker.security.roles.Role;
import com.hrmstracker.security.roles.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class UserService {

    private final Logger LOG = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;


    @Transactional(readOnly = true)
    public User getUserWithAuthorities() {
        return userRepository.findByUsername(SecurityUtils.getCurrentUserLogin()).orElse(null);
    }

    public User createUser(UserDTO userDto) {

        Set<Role> roleList = new HashSet<>();
        User user = new User();

        user.setUsername(userDto.getUsername());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());

        if (userDto.getUserRoles() != null) {
            for (Long roleId : userDto.getUserRoles()) {
                Role role = roleRepository.getOne(roleId);
                roleList.add(role);
            }
            user.setUserRoles(roleList);
        }

        userRepository.save(user);
        return user;
    }

}
