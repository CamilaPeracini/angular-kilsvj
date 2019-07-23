import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `<h1>  {{name}} Page </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  constructor(private fb: FormBuilder) { }
  @Input() name: string;
}

export class Account {
  @Input() user_id: string;
  @Input() password: string;
}