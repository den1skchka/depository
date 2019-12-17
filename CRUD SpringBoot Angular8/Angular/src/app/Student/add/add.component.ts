import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Student } from 'src/app/Model/Student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Save(student:Student){
    this.service.createStudent(student).subscribe(data=>{
      alert("Студент успешно добавлен!");
      this.router.navigate(["list"]);
    })
  }
}
