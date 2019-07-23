import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-name-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
  email = new FormControl('');
}






