import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  form= new FormGroup({
    title: new FormControl('',{ nonNullable: true }),
    body: new FormControl('',{ nonNullable: true }),
  });

  

}
