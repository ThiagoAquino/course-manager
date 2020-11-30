import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component ({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent  implements OnInit {
   
    course: Course;
    
    constructor(private activatedRoute: ActivatedRoute, private coursService: CourseService){}
    ngOnInit():  void {
        this.course = this.coursService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));

    }

    save(): void {
        this.coursService.save(this.course);
    }
}