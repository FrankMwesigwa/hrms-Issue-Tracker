package com.hrmstracker.web.batch;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BatchRepository extends JpaRepository<Batch, Long> {

    List<BatchDTO> findAllBy();
    BatchDTO findBatchById(long id);

}

