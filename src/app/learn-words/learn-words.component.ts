import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-learn-words',
  templateUrl: './learn-words.component.html',
  styleUrls: ['./learn-words.component.css']
})
export class LearnWordsComponent implements OnInit {
    words: Array<object> = [];
    word: object = {};
    randomNumber = -1;
    cnt = 0;

    constructor(private wordsService: WordsService) { }

    ngOnInit() {
        this.wordsService.getList('words')
            .subscribe(words => {
                words.map(word => {
                    this.words.push(word);
                });
                this.words.reverse();
                this.word = this.words[0];
                // console.log(this.words);
            });
    }

    randomWord() {
        this.cnt = -1;
        const num = Math.round(Math.random() * (this.words.length - 1));
        // console.log(num, this.randomNumber);
        if (num === this.randomNumber) {
            this.randomWord();
        } else {
            this.word = this.words[num];
            this.randomNumber = num;
        }
    }

    lastWord() {
        // console.log(this.cnt, this.words);

        if (this.cnt === this.words.length - 1) {

            this.cnt = 0;
        }

        this.word = this.words[++this.cnt];

    }

}
