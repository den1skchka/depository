import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // student: Student[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/project1/students'

  getStudent(){
    return this.http.get<Student[]>(this.Url);
  }
  createStudent(student:Student){
    return this.http.post<Student>(this.Url,student)
  }
  getStudentId(id:number){
    return this.http.get<Student>(this.Url+"/"+id);
  }
  updateStudent(student:Student){
    return this.http.put<Student>(this.Url+"/"+student.id,student);
  }
}
