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
    private LocalDateTime createdOn;
    private String createdBy;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedOn;
    private String updatedBy;


    public TranDTO(){}

    public TranDTO (Tran tran) {
        this(
                tran.getId(),
                tran.getBatchId(),
                tran.getComments(),
                tran.getStatus().getId(),
                tran.getStatus().getName(),
                tran.getCreatedOn(),
                tran.getCreatedBy().getUsername(),
                tran.getUpdatedOn(),
                tran.getUpdatedBy().getUsername()
        );
    }

    public TranDTO(Long id, Long batchId, String comments,Long statusId,String statusName,
                    LocalDateTime createdOn, String createdBy, LocalDateTime updatedOn,String updatedBy) {

        this.id = id;
        this.batchId = batchId;
        this.comments = comments;
        this.statusId = statusId;
        this.statusName = statusName;
        this.updatedOn = createdOn;
        this.updatedBy = createdBy;
        this.updatedOn = updatedOn;
        this.updatedBy = updatedBy;

    }
}
