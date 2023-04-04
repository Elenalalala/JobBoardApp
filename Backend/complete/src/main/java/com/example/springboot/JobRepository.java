package com.example.springboot;
import org.springframework.data.repository.CrudRepository;

import com.example.springboot.Job;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface JobRepository extends CrudRepository<Job, Integer> {

}
