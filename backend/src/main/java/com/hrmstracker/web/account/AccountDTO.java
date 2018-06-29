package com.hrmstracker.web.account;

import lombok.Data;

@Data
public class AccountDTO {

    private Long id;
    private String accountName;
    private String accountNo;
    private String clientCode;
    private String accountType;

}
