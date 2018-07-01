package com.hrmstracker.web.batch;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hrmstracker.web.account.AccountDTO;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class BatchDTO {

    private Long id;
    private String name;
    private String comments;
    private Long statusId;
    private String statusName;
    private List<AccountDTO> accounts;
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
                batch.getCreatedBy().getUsername(),
                batch.getAccounts().stream().map(account -> {
                    AccountDTO accountDto = new AccountDTO();
                    accountDto.setBatchId(account.getBatch().getId());
                    accountDto.setAccountName(account.getAccountName());
                    accountDto.setAccountNo(account.getAccountNo());
                    accountDto.setAccountType(account.getAccountType());
                    accountDto.setClientCode(account.getClientCode());
                    return accountDto;
                }).collect(Collectors.toList())
        );
    }

    public BatchDTO(Long id, String name, String comments,Long statusId, String statusName,
                    LocalDateTime createdOn, String createdBy,List<AccountDTO> accounts) {

        this.id = id;
        this.name = name;
        this.comments = comments;
        this.statusId = statusId;
        this.statusName = statusName;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.accounts = accounts;

    }
}
