import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Student } from 'src/app/Model/Student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student: Student = new Student();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Edit();
  }

  Edit(){
    let id=localStorage.getItem("id");
    this.service.getStudentId(+id).subscribe(data=>{
      this.student=data;
    })

  }

}
