import { CepService } from './../cep.service';
import { PERSONS } from './../models/constants';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  id: string;
  person: Person;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private cep: CepService,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.id = params.id;

      this.getPerson();

      if (this.id !== this.person.id) {
        alert()
      }
    });


  }

  submit(form) {
    this.loading = true;
    var persons: Person[] = JSON.parse(localStorage.getItem(PERSONS));
    var index = persons.findIndex(x => x.cpf === this.person.cpf);

    persons[index] = this.person;

    localStorage.setItem(PERSONS, JSON.stringify(persons));

    alert('Pessoa atualizada com sucesso');

    this.router.navigate(['/list-person'])
  }

  getPerson() {
    this.person = (JSON.parse(localStorage.getItem(PERSONS)) as Person[])
      .find(x => x.id === this.id);

      if (typeof this.person === 'undefined') {
        alert('Pessoa não encontrada');
        this.router.navigate(['list-person']);
        return;
      }

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
