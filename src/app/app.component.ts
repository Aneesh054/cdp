import { Component } from '@angular/core';
import { courses } from './interfaces/courses';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdp';
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
