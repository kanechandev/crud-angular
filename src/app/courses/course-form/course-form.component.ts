import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent{

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location){
    //this.form
  }

  ngOnInit(): void{

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe({
      next: (data) => this.onSucess(),
      error: () => this.onError()
    });
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000});
  }
}
