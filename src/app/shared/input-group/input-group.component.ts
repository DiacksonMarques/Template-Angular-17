import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.scss'
})
export class InputGroupComponent implements OnInit{

  @Output() filterValue = new EventEmitter<string>();

  formInputProduct!: FormControl;

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formInputProduct = this.formBuilder.control(null);
    this.formInputProduct.valueChanges.subscribe(value => {
      this.filterValue.emit(value);
    })
  }
}
