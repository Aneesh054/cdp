import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { courses } from '../interfaces/courses';


@Injectable({
  providedIn: 'root'
})
export class CourseService{
 constructor(private httpClient:HttpClient) { }
  getCourses():Observable<courses[]>{
    return this.httpClient.get<courses[]>('http://localhost:3000/courses');
  }
  }