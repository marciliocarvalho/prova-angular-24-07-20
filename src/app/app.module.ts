import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

@NgModule({
	declarations: [
		AppComponent,
		AddPersonComponent,
		ListPersonComponent,
		EditPersonComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
	],
	providers: [CepService],
	bootstrap: [AppComponent]
})
export class AppModule { }
