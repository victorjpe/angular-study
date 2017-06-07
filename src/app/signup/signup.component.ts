import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;
  post: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private fb : FormBuilder) { 

    this.signUpForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
    })
  }

  ngOnInit() {
  }

  signUp(post){
    console.log('signup', post);
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
  }

}