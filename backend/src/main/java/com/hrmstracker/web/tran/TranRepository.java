package com.hrmstracker.web.tran;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TranRepository extends JpaRepository<Tran, Long> {

    //List<TranDTO> findTranById(Long id);

    List<TranDTO> findTranByBatchId(@Param("batch_id") Long id);

}
