package com.hrmstracker.web.status;

import lombok.Data;

@Data
public class StatusDTO {

    private Long id;
    private String name;

    public StatusDTO(){}

    public StatusDTO(Status status) {
        this(
                status.getId(),
                status.getName()
        );
    }

    public StatusDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
