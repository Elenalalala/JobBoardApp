package com.JobBoard;

import javax.persistence.*;

@Entity
@Table(name = "national_M2021_dl")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "OCC_CODE")
    private String occCode;

    @Column(name = "OCC_TITLE")
    private String occTitle;

    @Column(name = "A_MEAN")
    private String aMean;

    public String getAMean() {
        return aMean;
    }

    public void setAMean(String aMean) {
        this.aMean = aMean;
    }

    public String getOccTitle() {
        return occTitle;
    }

    public void setOccTitle(String occTitle) {
        this.occTitle = occTitle;
    }

    public String getOccCode() {
        return occCode;
    }

    public void setOccCode(String occCode) {
        this.occCode = occCode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
