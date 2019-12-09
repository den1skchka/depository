package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentServiceImp implements StudentService{
    @Autowired
    private StudentRepository repository;

    @Override
    public List<Student> list() {
        return repository.findAll();
    }

    @Override
    public Student listId(int id) {
        return null;
    }

    @Override
    public Student add(Student s) {
        return null;
    }

    @Override
    public Student edit(Student s) {
        return null;
    }

    @Override
    public Student delete(int id) {
        return null;
    }
}
