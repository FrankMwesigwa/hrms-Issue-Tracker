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
    private Long branchId;
    private String branchName;
    private Set<Long> roles;
    private Set<String> roleName;

    public UserDTO(){}

    public UserDTO(User user) {
        this(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getBranch().getId(),
                user.getBranch().getName(),
                user.getRoles().stream().map(Role::getId).collect(Collectors.toSet()),
                user.getRoles().stream().map(Role::getRoleName).collect(Collectors.toSet())
                );
    }

    public UserDTO(Long id, String username, String password, String firstName, String lastName,
                   String email, Long branchId, String branchName, Set<Long> roles, Set<String> roleName) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.branchId = branchId;
        this.branchName = branchName;
        this.roles = roles;
        this.roleName = roleName;
    }

}
