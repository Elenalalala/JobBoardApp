package com.JobBoard;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobRepository extends CrudRepository<Job, Integer> {
    List<Job> findByOccTitleContainsIgnoreCase(String occTitle);
    List<Job> findByOccTitleStartsWithIgnoreCase(String occTitle);
    Job findByOccCode(String occCode);
    public Long countById(Integer id);
}
