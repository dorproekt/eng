import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { AddWordComponent } from './add-word/add-word.component';
import { AppRoutingModule } from './app-routing.module';
import { LearnWordsComponent } from './learn-words/learn-words.component';

// Firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

// Services
import { WordsService } from './words.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWordComponent,
    LearnWordsComponent,
    EditComponent
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
