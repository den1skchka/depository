package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/students"})
public class Controller {

    @Autowired
    StudentService service;

    @GetMapping
    public List<Student>list(){
        return service.list();
    }

    @PostMapping
    public Student adding(@RequestBody Student s){
        return service.add(s);
    }

    @GetMapping(path = ("/{id}"))
    public Student listId(@PathVariable("id") int id){
        return service.listId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Student editing(@RequestBody Student s, @PathVariable("id") int id){
        s.setId(id);
        return service.edit(s);
    }
}
