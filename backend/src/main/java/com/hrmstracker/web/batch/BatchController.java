package com.hrmstracker.web.batch;

import com.hrmstracker.security.users.User;
import com.hrmstracker.security.users.UserService;
import com.hrmstracker.utilities.ApiResponse;
import com.hrmstracker.web.account.Account;
import com.hrmstracker.web.status.Status;
import com.hrmstracker.web.status.StatusRepository;
import com.hrmstracker.web.tran.Tran;
import com.hrmstracker.web.tran.TranRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api")
public class BatchController {

    private BatchRepository batchRepository;
    private TranRepository tranRepository;
    private StatusRepository statusRepository;
    private UserService userService;

    public BatchController(BatchRepository batchRepository, TranRepository tranRepository,
                           StatusRepository statusRepository,UserService userService ) {
        this.batchRepository = batchRepository;
        this.tranRepository = tranRepository;
        this.statusRepository = statusRepository;
        this.userService = userService;
    }

    @GetMapping("/batch")
    public ResponseEntity<List<BatchDTO>> getAllBatch(Pageable pageable) {
        final Page<BatchDTO> page = batchRepository.findAll(pageable).map(BatchDTO::new);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    @GetMapping("/batch/{id}")
    public ResponseEntity<BatchDTO> getBatchById(@PathVariable("id") long id) {
        BatchDTO batch = batchRepository.findBatchById(id);
        return new ResponseEntity<BatchDTO>(batch, HttpStatus.OK);
    }

    @GetMapping("/batch/status")
    public List<Status> getStatus() {
        return statusRepository.findAll();
    }

    @PostMapping("/batch")
    public ResponseEntity<?> createBatch(@Valid @RequestBody BatchDTO batchDto) {

        Batch batch = new Batch();
        User currentUser = userService.getLoggedUser();

        batch.setName(batchDto.getName());
        batch.setComments(batchDto.getComments());
        batch.setStatus(statusRepository.getOne(batchDto.getStatusId()));
        batch.setCreatedBy(currentUser);
        batch.setCreatedOn(LocalDateTime.now());

        Batch result = batchRepository.save(batch);

        batchDto.getAccounts().forEach(accountDTO ->
        batch.addAccount(new Account(
                accountDTO.getAccountName(),
                accountDTO.getAccountNo(),
                accountDTO.getClientCode(),
                accountDTO.getAccountType()))
    );

        Tran transactions = new Tran();

        transactions.setBatchId(batch.getId());
        transactions.setCreatedOn(LocalDateTime.now());
        transactions.setStatus(batch.getStatus());
        transactions.setCreatedBy(currentUser);
        transactions.setComments(batch.getComments());
        tranRepository.save(transactions);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/batch")
                .buildAndExpand(result.getName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Batch created successfully"));
    }

    @DeleteMapping("/batch/{id}")
    public ResponseEntity<?> deleteBatch(@PathVariable long id) {

        Batch batch = batchRepository.getOne(id);
        batchRepository.delete(batch);
        return new ResponseEntity<Batch>(HttpStatus.NO_CONTENT);
    }


}



