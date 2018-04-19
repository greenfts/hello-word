import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from '../core/auth.service';
// import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      {{welcome}}!
    </p>
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input type="text" required minlength="6" maxlength="12"
            name="userName"
            #usernameRef= "ngModel"
            [(ngModel)]= "userName"
          />
          {{usernameRef.valid}}
          {{usernameRef.errors | json}}
          <div *ngIf="usernameRef.errors?.required">this is requird!</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 6 charactors!</div>
          <input type="password" required minlength="8" maxlength="16"
            name="password"
            #passwordRef= "ngModel"
            [(ngModel)]= "password"
          />
          <div *ngIf="passwordRef.errors?.required">this is requird!</div>
          <div *ngIf="passwordRef.errors?.minlength">should be at least 8 charactors!</div>
          {{passwordRef.valid}}
          {{passwordRef.errors | json}}
          <button (click)="onClick()">Login</button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid { border:3px solid red;}
    input.ng-valid { border:3px solid green;}
    `]
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {

  welcome = 'Hello, This is a LoginComponent';
  userName = '';
  password = '';

  // constructor(private authService: AuthService) { }
  constructor(@Inject('auth') private authService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('username:' + this.userName + '\r\n' + 'password:' + this.password + '\r\n'
     + 'Auth result is:' + this.authService.loginWithCredentials(this.userName, this.password));
  }

  onSubmit(formValue) {
    console.log(formValue);
    console.log('username:' + formValue.login.userName + '\r\n' + 'password:' + formValue.login.password + '\r\n'
     + 'Auth result is:' + this.authService.loginWithCredentials(formValue.login.userName, formValue.login.password));
  }
}
