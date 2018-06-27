package com.hrmstracker.security.users;

import com.hrmstracker.security.roles.Role;
import lombok.Data;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class UserDTO  {

    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private Set<Long> userRoles;

    public UserDTO(){}

    public UserDTO(User user) {
        this(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getUserRoles().stream().map(Role::getId).collect(Collectors.toSet()));
    }

    public UserDTO(Long id, String username, String password, String firstName, String lastName,
                   String email, Set<Long> userRoles) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userRoles = userRoles;
    }

}
