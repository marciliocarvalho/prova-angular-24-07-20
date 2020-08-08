import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  persons = [
    {
      name: 'Teste',
      cpf: 'Teste',
      phone: 'Teste',
      email: 'Teste',
      cep: 'Teste',
      state: 'Teste',
      city: 'Teste',
      street: 'Teste',
    }
  ];
  columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions'];
  selectedPerson;

  constructor() { }

  ngOnInit() {
  }

  editPerson(person) {
		this.selectedPerson = { ...person }
  }
  
  deletePerson(person) {
		remove(person)
		this.persons = JSON.parse(get())
	}

}
