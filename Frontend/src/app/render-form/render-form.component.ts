import { Component, Input, OnInit } from '@angular/core';
import { CustomForm, fieldTypes } from '../model/form.model';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.css']
})
export class RenderFormComponent implements OnInit {

  @Input() customForm?: CustomForm = new CustomForm();
  elementTypes: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.prepareElementTypes();
  }

  prepareElementTypes(): void {
    this.elementTypes = [];
    fieldTypes.forEach(type => {
      this.elementTypes.push(type.value);
    });
  }

}
