package com.example.brahmpreetsingh.the_roster;

/**
 * Created by Brahmpreet singh on 2017-09-23.
 */

public class DataProvider {                 //Purpose of this class is to provide us data from each row as an object
    String name;
    String eyecolor;
    String dob;
    String status;
    String size;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEyecolor() {
        return eyecolor;
    }

    public void setEyecolor(String eyecolor) {
        this.eyecolor = eyecolor;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String Size) {
        this.size = size;
    }



    public DataProvider(String name, String eyecolor, String dob, String status,String size)
    {
        this.name=name;
        this.eyecolor=eyecolor;
        this.dob=dob;
        this.status=status;
        this.size=size;
    }

}
