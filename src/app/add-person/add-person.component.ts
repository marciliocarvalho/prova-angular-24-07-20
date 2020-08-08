
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  person: Person = {
    name: '',
    cep: '',
    city: '',
    cpf: '',
    email:'',
    phone: '',
    state: '',
    street: ''
  }

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
  }
}
