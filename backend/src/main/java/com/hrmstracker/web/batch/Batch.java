package com.hrmstracker.web.batch;

import com.hrmstracker.web.account.Account;
import com.hrmstracker.web.status.Status;
import com.hrmstracker.web.tran.Tran;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "batch")
public class Batch {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "batch_id")
    private Long id;

    private String name;
    private String batchStatus;
    private String description;

    @ManyToOne
    @JoinColumn(name = "status_id", referencedColumnName = "id")
    private Status status;

    @OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @Fetch(FetchMode.SELECT)
    private List<Account> accounts = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "batchId")
    private List<Tran> trans;

    public void addAccount(Account account) {
        accounts.add(account);
        account.setBatch(this);
    }

}
