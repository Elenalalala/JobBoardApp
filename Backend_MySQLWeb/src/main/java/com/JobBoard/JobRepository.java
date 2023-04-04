package com.JobBoard;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface JobRepository extends PagingAndSortingRepository<Job, Integer> {
    List<Job> findByOccTitleContainsIgnoreCase(String occTitle, Pageable pageable);
    List<Job> findByOccTitleStartsWithIgnoreCase(String occTitle);
    Job findByOccCode(String occCode);
    public Long countById(Integer id);
}
