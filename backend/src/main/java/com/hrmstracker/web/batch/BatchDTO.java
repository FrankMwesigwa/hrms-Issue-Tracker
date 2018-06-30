package com.hrmstracker.web.batch;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hrmstracker.web.account.AccountDTO;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class BatchDTO {

    private Long id;
    private String name;
    private String comments;
    private Long statusId;
    private String statusName;
    private Set<AccountDTO> accounts;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdOn;
    private String createdBy;


    public BatchDTO(){}

    public BatchDTO (Batch batch) {
        this(
                batch.getId(),
                batch.getName(),
                batch.getComments(),
                batch.getStatus().getId(),
                batch.getStatus().getName(),
                batch.getCreatedOn(),
                batch.getCreatedBy().getUsername()
        );
    }

    public BatchDTO(Long id, String name, String comments,Long statusId, String statusName,
                    LocalDateTime createdOn, String createdBy) {

        this.id = id;
        this.name = name;
        this.comments = comments;
        this.statusId = statusId;
        this.statusName = statusName;
        this.createdOn = createdOn;
        this.createdBy = createdBy;

    }
}
