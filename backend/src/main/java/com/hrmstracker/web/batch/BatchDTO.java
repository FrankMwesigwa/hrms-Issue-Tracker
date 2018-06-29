package com.hrmstracker.web.batch;

import com.hrmstracker.web.account.AccountDTO;
import lombok.Data;

import java.util.Set;

@Data
public class BatchDTO {

    private Long id;
    private String name;
    private String description;
    private Long statusId;
    private String statusName;
    private Set<AccountDTO> accounts;

    public BatchDTO(){}

    public BatchDTO (Batch batch) {
        this(
                batch.getId(),
                batch.getName(),
                batch.getDescription(),
                batch.getStatus().getId(),
                batch.getStatus().getName()
        );
    }

    public BatchDTO(Long id, String name, String description,
                    Long statusId, String statusName) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.statusId = statusId;
        this.statusName = statusName;
    }
}
