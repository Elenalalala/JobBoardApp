package com.example.springboot;

import javax.persistence.*;

//import lombok.Data;
import org.hibernate.annotations.Table;

//@Data
@Entity // This tells Hibernate to make a table out of this class
public class Job {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name = "OCC_CODE")
    private String OCC_CODE;

    @Column(name = "H_MEAN")
    private double H_MEAN;

    @Column(name = "OCC_TITLE")
    private String OCC_TITLE;

    public String getOCC_CODE() {
        return OCC_CODE;
    }

    public void setOCC_CODE(String OCC_CODE) {
        this.OCC_CODE = OCC_CODE;
    }

    public double getH_MEAN() {
        return H_MEAN;
    }

    public void setH_MEAN(double h_MEAN) {
        H_MEAN = h_MEAN;
    }

    public String getOCC_TITLE() {
        return OCC_TITLE;
    }

    public void setOCC_TITLE(String OCC_TITLE) {
        this.OCC_TITLE = OCC_TITLE;
    }
}
