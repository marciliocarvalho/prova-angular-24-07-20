import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Person } from '../models/person.model';


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  persons: Person[] = [
    {
      name: 'Marcilio',
      cpf: '08147699425',
      email: 'marcilioc108@gmail.com',
      phone: '81997248632',
      cep: '55024210',
      state: 'PE',
      city: 'Caruaru',
      street: 'Rua Barão de Itamaracá'
    }
  ];
  // columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions'];
  // selectedPerson;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  editPerson(person) {
    this.router.navigate(['edit-person'])
  }

  deletePerson(person) {
    this.remove(person);
    this.persons = JSON.parse(this.get());
  }

  get() {
    return localStorage.getItem('persons');
  }

  remove(person) {
    var persons = JSON.parse(localStorage.getItem('persons'));
    var cpf = Number(person.cpf);
    var index = persons.findIndex(foundPerson => foundPerson.cpf == String(cpf));
    persons.splice(index, 1);
    localStorage.setItem('persons', JSON.stringify(persons));
  }
}
