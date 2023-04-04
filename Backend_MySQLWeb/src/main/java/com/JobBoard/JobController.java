package com.JobBoard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@Controller
public class JobController {
    @Autowired private JobRepository jobRepository;

    @GetMapping("/jobs/all")
    public @ResponseBody Iterable<Job> getAllJobs() {

        return jobRepository.findAll();
    }

    @GetMapping("/jobs/name/{name}")
    public @ResponseBody List<Job> getJobByOccTitle(@PathVariable("name") String name) {
        //give pagination functionality, return top 10 result of the query
        Pageable ten = PageRequest.of(0, 10);
        List<Job> job = jobRepository.findByOccTitleContainsIgnoreCase(name, ten);
//        jobRepository.findByOccTitleLikeIgnoreCase(name).setMaxResults(limit).getResultList();
//        jobRepository.createQuery
        return job;
    }

    @GetMapping("/jobs/code/{id}")
    public @ResponseBody Job getJobByOccCode(@PathVariable("id") String id) {
        Job job = jobRepository.findByOccCode(id);
        return job;
    }

    @GetMapping("/code")
    @ResponseBody
    public Job getJobsByCode(@RequestParam(name = "id") String id) {
        //http://localhost:8080/jobs?code=11-1000
        Job job = jobRepository.findByOccCode(id);
        return job;
    }
}
