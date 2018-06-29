package com.hrmstracker.web.batch;

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
import java.util.*;

@RestController
@RequestMapping("/api")
public class BatchController {

    private BatchRepository batchRepository;
    private TranRepository tranRepository;
    private StatusRepository statusRepository;

    public BatchController(BatchRepository batchRepository, TranRepository tranRepository,
                           StatusRepository statusRepository ) {
        this.batchRepository = batchRepository;
        this.tranRepository = tranRepository;
        this.statusRepository = statusRepository;
    }

    @GetMapping("/batch")
    public ResponseEntity<List<BatchDTO>> getAllBatch(Pageable pageable) {
        final Page<BatchDTO> page = batchRepository.findAll(pageable).map(BatchDTO::new);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    @GetMapping("/batch/status")
    public List<Status> getStatus() {
        return statusRepository.findAll();
    }

    @PostMapping("/batch")
    public ResponseEntity<?> createBatch(@Valid @RequestBody BatchDTO batchDto) {

        Batch batch = new Batch();

        batch.setName(batchDto.getName());
        batch.setBatchStatus("Open");
        batch.setDescription(batchDto.getDescription());
        batch.setStatus(statusRepository.getOne(batchDto.getStatusId()));

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
        transactions.setCreatedDate(new Date());
        transactions.setStatusId(batch.getStatus().getId());
        transactions.setCreatedBy("Frank");
        transactions.setComments("initial request");
        tranRepository.save(transactions);


        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/batch")
                .buildAndExpand(result.getName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Batch created successfully"));
    }



    /*@PutMapping("/batch/{id}")
    public ResponseEntity<?>  updateBatch(@PathVariable(value = "id") Long batchId,
                                         @Valid @RequestBody BatchDTO batchDetails) {

        Batch batch = batchRepository.findById(batchId)
                .orElseThrow(() -> new ResourceNotFoundException("Batch", "id", batchId));

        batch.setName(batchDetails.getName());
        batch.setBatchStatus("Closed");
        batch.setDescription(batchDetails.getDescription());
        //batch.setStatus(statusRepository.getOne(batchDetails.getStatus()));

        Batch updatedBatch = batchRepository.save(batch);

        Tran transactions = new Tran();
        transactions.setBatchId(batch.getId());
        transactions.setCreatedDate(new Date());
        transactions.setStatusId(batch.getStatus().getId());
        transactions.setCreatedBy("Frank");
        transactions.setComments("initial request");
        tranRepository.save(transactions);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/batch")
                .buildAndExpand(updatedBatch.getName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Batch Updated successfully"));
    }*/


}



