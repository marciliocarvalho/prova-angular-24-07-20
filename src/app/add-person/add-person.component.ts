import { CepService } from './../cep.service';
import { PERSONS } from './../models/constants';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/person.model';
import { Router } from '@angular/router';

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
    email: '',
    phone: '',
    state: '',
    street: ''
  }

  loading: boolean;

  constructor(
    private router: Router,
    private cep: CepService
  ) { }

  ngOnInit() {
  }

  submit(form) {
    var persons: Person[] = JSON.parse(localStorage.getItem(PERSONS));
    if (persons.find(x => x.cpf === this.person.cpf)) {
      alert('Esse CPF já está cadastrado');
      return;
    }
    persons.push(this.person);
    localStorage.setItem(PERSONS, JSON.stringify(persons));
    alert('Pessoa inserida com sucesso');
    this.router.navigate(['list-person']);
  }

  changeCep(event) {
    var cep = event.target.value;
    if (cep.length == 8) {
      this.loading = true;
      this.cep.getCep(cep).then((apiResponse: any) => {
        if (apiResponse.erro) {
          alert('Cep não encontrado')
        } else {
          this.person = {
            ...this.person,
            cep: apiResponse.cep.replace('-', ''),
            state: apiResponse.uf,
            city: apiResponse.localidade,
            street: apiResponse.logradouro
          }
        }
      }).catch(error => {
        alert('Erro ao buscar o cep')
        console.error(error)
      }).finally(() => this.loading = false)
    }
  }
}
