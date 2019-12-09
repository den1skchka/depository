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

  gerStudent(){
    return this.http.get<Student[]>(this.Url);
  }
}
