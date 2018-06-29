package com.hrmstracker.security.users;

import com.hrmstracker.security.auth.SecurityUtils;
import com.hrmstracker.security.roles.Role;
import com.hrmstracker.security.roles.RoleRepository;
import com.hrmstracker.web.branch.BranchRepository;
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

    @Autowired
    private BranchRepository branchRepository;


    @Transactional(readOnly = true)
    public User getUserWithAuthorities() {
        return userRepository.findByUsername(SecurityUtils.getCurrentUserLogin()).orElse(null);
    }

    public User createUser(UserDTO userDTO) {

        User user = new User();
        Set<Role> roleList = new HashSet<>();

        user.setUsername(userDTO.getUsername());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setBranch(branchRepository.getOne(userDTO.getBranchId()));

        if (userDTO.getRoles() != null) {
            for (Long roleId : userDTO.getRoles()) {
                Role role = roleRepository.getOne(roleId);
                roleList.add(role);
            }
            user.setRoles(roleList);
        }

        userRepository.save(user);
        return user;
    }

}
