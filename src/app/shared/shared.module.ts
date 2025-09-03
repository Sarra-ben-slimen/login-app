import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field/input-field.component';

@NgModule({
      declarations: [InputFieldComponent],
      imports: [CommonModule, ReactiveFormsModule],
      exports: [CommonModule, ReactiveFormsModule, InputFieldComponent]
})
export class SharedModule { }