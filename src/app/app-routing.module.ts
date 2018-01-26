import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWordComponent } from './add-word/add-word.component';
import { LearnWordsComponent } from './learn-words/learn-words.component';

const routes: Routes = [
  { path: 'add-word', component: AddWordComponent },
  { path: 'learn-words', component: LearnWordsComponent },
  { path: '**', redirectTo: '/add-word', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
