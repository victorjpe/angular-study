import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class UserService {

	user: User;

	constructor() {
		this.user = new User();
	}

	setUser(firstName: string, lastName: string, email: string) {
		this.user.firstName = firstName;
		this.user.lastName = lastName;
		this.user.email = email;
	}

	getUser() {
		return this.user;
	}

}