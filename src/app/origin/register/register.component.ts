import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public username: string = '';
  public password: string = '';
  
  public message: string = '';
  constructor(private userService: UserService,
              private router: Router) { }

  register(){
    
  }


}
