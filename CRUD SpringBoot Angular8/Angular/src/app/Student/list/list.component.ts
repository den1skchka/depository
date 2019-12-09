import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Student } from 'src/app/Model/Student';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students:Student[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.gerStudent().subscribe(data=>{
      this.students=data;
    })
  }

}
