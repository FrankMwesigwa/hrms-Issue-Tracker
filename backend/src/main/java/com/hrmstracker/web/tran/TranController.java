package com.hrmstracker.web.tran;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TranController {

    private TranRepository tranRepository;

    public TranController(TranRepository tranRepository) {
        this.tranRepository = tranRepository;
    }

    @GetMapping("/trans/")
    public ResponseEntity<List<TranDTO>> getTranById(@RequestParam Long batch_id) {
        List<TranDTO> tranList = tranRepository.findTranByBatchId(batch_id);
        return new ResponseEntity<List<TranDTO>>(tranList, HttpStatus.OK);
    }


}
