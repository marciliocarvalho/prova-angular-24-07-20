import { PERSONS } from './../models/constants';
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

  persons: Person[] = [ ];
  // columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions'];
  // selectedPerson;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getPersons();
  }

  editPerson(person: Person) {
    this.router.navigate(['edit-person', person.cpf])
  }

  deletePerson(person) {
    this.remove(person);
    this.persons = JSON.parse(this.get());
  }

  get() {
    return localStorage.getItem('persons');
  }

  remove(person: Person) {
    var persons : Person[] = JSON.parse(localStorage.getItem('persons'));
    persons = persons.filter(x => x.cpf !== person.cpf);
    localStorage.setItem(PERSONS, JSON.stringify(persons));
    // var cpf = Number(person.cpf);
    // var index = persons.findIndex(foundPerson => foundPerson.cpf == String(cpf));
    // persons.splice(index, 1);
    // localStorage.setItem('persons', JSON.stringify(persons));
  }

  getPersons() {
    this.persons = JSON.parse(localStorage.getItem(PERSONS));
  }
}
