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

    @Column(name = "H_MEDIAN")
    private String hMedian;

    @Column(name = "A_PCT25")
    private String aPct25;

    @Column(name = "A_MEDIAN")
    private String aMedian;

    @Column(name = "ANNUAL")
    private String annual;

    @Column(name = "HOURLY")
    private String hourly;

    public String getHourly() {
        return hourly;
    }

    public void setHourly(String hourly) {
        this.hourly = hourly;
    }

    public String getAnnual() {
        return annual;
    }

    public void setAnnual(String annual) {
        this.annual = annual;
    }

    public String getAMedian() {
        return aMedian;
    }

    public void setAMedian(String aMedian) {
        this.aMedian = aMedian;
    }

    public String getAPct25() {
        return aPct25;
    }

    public void setAPct25(String aPct25) {
        this.aPct25 = aPct25;
    }

    public String getHMedian() {
        return hMedian;
    }

    public void setHMedian(String hMedian) {
        this.hMedian = hMedian;
    }

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
