import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
    { path: '', redirectTo: 'todo', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'todo', component: TodoComponent },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
