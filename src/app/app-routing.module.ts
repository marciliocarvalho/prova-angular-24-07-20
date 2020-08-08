import { ListPersonComponent } from './list-person/list-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list-person',
        pathMatch: 'full'
    },
    {
        path: 'list-person',
        component: ListPersonComponent,
    },
    {
        path: 'add-person',
        component: AddPersonComponent,
    },
    {
        path: '**',
        redirectTo: 'list-person',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
