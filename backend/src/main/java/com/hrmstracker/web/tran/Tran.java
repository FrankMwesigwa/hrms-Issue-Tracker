package com.hrmstracker.web.tran;

import com.hrmstracker.security.users.User;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "trans")
public class Tran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime createdOn;
    private String comments;

    @Column(name="batch_id")
    private Long batchId;

    @Column(name="status_id")
    private Long statusId;

    @ManyToOne
    @JoinColumn(name = "created_By", referencedColumnName = "id")
    private User createdBy;
}
