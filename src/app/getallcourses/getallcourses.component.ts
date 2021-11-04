import { Component, OnInit } from '@angular/core';
import { courses } from '../interfaces/courses';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-getallcourses',
  templateUrl: './getallcourses.component.html',
  styleUrls: ['./getallcourses.component.css'],
  providers:[
    CourseService
  ]
})
export class GetallcoursesComponent implements OnInit {
 courseslist:Array<courses>=new Array();
 
  constructor(private courseServices:CourseService) { }
  ngOnInit(): void {
    this.courseServices.getCourses().subscribe((data)=>{ this.courseslist=data;
  });
    console.log(this.courseslist);
  }
  getCourses():void{
    this.courseServices.getCourses().subscribe((data)=>{ this.courseslist=data;
    });
    console.log(this.courseslist)
  }
}
