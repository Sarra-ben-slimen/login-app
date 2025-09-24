import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field/input-field.component';
import { NavBarComponent } from '../features/nav-bar/nav-bar.component';

@NgModule({
      declarations: [InputFieldComponent, NavBarComponent],
      imports: [CommonModule, ReactiveFormsModule],
      exports: [CommonModule, ReactiveFormsModule, InputFieldComponent, NavBarComponent]
})
export class SharedModule { }