package com.example.demo;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface StudentRepository extends Repository<Student, Integer> {
    List<Student>findAll();
//    Student findOne(int id);
    Student save(Student s);
    void delete(Student s);
}
