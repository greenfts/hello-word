import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
      {{welcome}}!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  welcome = 'Hello LoginComponent';

  constructor() { }

  ngOnInit() {
  }

}
