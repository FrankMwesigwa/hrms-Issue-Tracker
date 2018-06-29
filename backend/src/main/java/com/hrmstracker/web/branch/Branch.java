package com.hrmstracker.web.branch;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "branches")
public class Branch {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String name;

    public Branch() {
        super();
    }

}
