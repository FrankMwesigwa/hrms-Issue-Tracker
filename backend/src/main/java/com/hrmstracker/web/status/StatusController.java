package com.hrmstracker.web.status;

import org.springframework.web.bind.annotation.*;


@RestController
public class StatusController {

    private StatusRepository statusRepository;

    public StatusController(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

}
