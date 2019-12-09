package com.example.demo;

import java.util.List;

public interface StudentService {
    List<Student>list();
    Student listId(int id);
    Student add(Student s);
    Student edit(Student s);
    Student delete(int id);
}
