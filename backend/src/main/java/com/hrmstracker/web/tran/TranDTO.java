package com.hrmstracker.web.tran;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TranDTO {

    private Long id;
    private Long batchId;
    private Long statusId;
    private String comments;
    private String statusName;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedOn;
    private String updatedBy;


    public TranDTO(){}

    public TranDTO (Tran tran) {
        this(
                tran.getId(),
                tran.getBatchId(),
                tran.getComments(),
                tran.getStatusId(),
                tran.getCreatedOn(),
                tran.getCreatedBy().getUsername()
        );
    }

    public TranDTO(Long id, Long batchId, String comments,Long statusId,
                    LocalDateTime updatedOn, String updatedBy) {

        this.id = id;
        this.batchId = batchId;
        this.comments = comments;
        this.statusId = statusId;
        this.updatedOn = updatedOn;
        this.updatedBy = updatedBy;

    }
}
