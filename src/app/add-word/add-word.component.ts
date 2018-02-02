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
    words: Array<object> = [];

    constructor(private wordsService: WordsService) { }

    ngOnInit() {
        // all words
        this.wordsService.getList('words')
            .subscribe(words => {
                words.forEach(word => {
                    this.words.push(word);
                });
            });

        // validation form
        this.form = new FormGroup({
            en: new FormControl('', [Validators.required]),
            ru: new FormControl('', [Validators.required]),
        });
    }

    // add word
    onSubmit() {
        const word = this.form.value;

        const findWord = this.words.find(elem => {
            return (elem['en'].toUpperCase() === word['en'].toUpperCase()) ? true : false;
        });

        if (findWord) {
            alert('Такое слово уже есть :)');

            // clear form
            this.form.reset();
            return false;
        }

        this.wordsService.addWord(word);

        // clear form
        this.form.reset();
    }
    
    test() {
        console.log(111);
    }

}
