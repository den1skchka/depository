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
        return repository.findOne(id);
    }

    @Override
    public Student add(Student s) {
        return repository.save(s);
    }
    @Override
    public Student edit(Student s) {
        return repository.save(s);
    }

    @Override
    public Student delete(int id) {
        throw new UnsupportedOperationException("Not supported yet");
    }
}
