package com.hrmstracker.web.tran;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TranRepository extends JpaRepository<Tran, Long> {

    //List<TranDTO> findTranById(Long id);

    //List<TranDTO> findTranByBatchId(@Param("batch_id") Long id);

}
