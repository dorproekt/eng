import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
    form: FormGroup;

    constructor(private wordsService: WordsService) { }

    ngOnInit() {
        // validation form
        this.form = new FormGroup({
            en: new FormControl('', [Validators.required]),
            ru: new FormControl('', [Validators.required]),
        });
    }

    // add word
    onSubmit() {
        const word = this.form.value;
        this.wordsService.addWord(word);

        // clear form
        this.form.reset();
    }

}
