package com.hrmstracker.utilities;


import java.sql.Timestamp;
import java.util.Date;

public class Tk {

    public static Timestamp nowTs() {
        return new Timestamp(new Date().getTime());
    }
}
