import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { CustomForm, fieldTypes, FormField } from './model/form.model';
import { RegularExpressionComponent } from './util/regular-expression/regular-expression.component';
import { SelectOptionsComponent } from './util/select-options/select-options.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  availableFormTemplates: Array<CustomForm> = new Array<CustomForm>();
  newForm: CustomForm = new CustomForm();
  newField: FormField = new FormField();
  availableFormFieldTypes = fieldTypes;

  constructor(
    private baseService: BaseService,
  ) {

  }

  ngOnInit(): void {
      this.loadAllFormTemplates();
  }

  addFieldToForm(): void {
    this.newForm.fields?.push(this.newField);
    this.newField = new FormField();
  }

  saveFormTemplate(): void {
    if (this.newForm.name === undefined || this.newForm.name.trim() === '') {
      return alert('Please fill form name');
    }
    this.baseService.post(`${environment.api}/create`, false, this.newForm).subscribe(result => {
      console.log(result);
      alert('Successfully created');
      this.loadAllFormTemplates();
    });
  }

  loadAllFormTemplates(): void {
    this.baseService.get(`${environment.api}/all`, false).subscribe(result => {
      this.availableFormTemplates = result;
    });
  }

  setSelectedForm(template: CustomForm): void {
    this.newForm = template;
  }
}
