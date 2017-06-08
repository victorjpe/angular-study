import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

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

  constructor(private fb: FormBuilder, private userService: UserService) {

    this.signUpForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
    })
  }

  ngOnInit() {
    if (this.userService.user) {
      this.firstName = this.userService.user.firstName;
      this.lastName = this.userService.user.lastName;
      this.email = this.userService.user.email;
    }
  }

  signUp(post) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
    this.userService.setUser(this.firstName, this.lastName, this.email);
  }

}