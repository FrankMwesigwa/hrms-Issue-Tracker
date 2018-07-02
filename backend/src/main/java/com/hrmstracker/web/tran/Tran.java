package com.hrmstracker.web.tran;

import com.hrmstracker.security.users.User;

import com.hrmstracker.web.status.Status;
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

    @ManyToOne
    @JoinColumn(name="status_id", referencedColumnName = "id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "created_By", referencedColumnName = "id")
    private User createdBy;
}
