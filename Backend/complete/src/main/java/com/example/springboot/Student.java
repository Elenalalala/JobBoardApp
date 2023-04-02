package com.example.springboot;

import jakarta.persistence.*;
//import lombok.Data;
import org.hibernate.annotations.Table;

//@Data
@Entity // This tells Hibernate to make a table out of this class
public class Student {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;
    @Column(name = "class")
    private String className;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return className;
    }

    public void setEmail(String email) {
        this.className = email;
    }
}
