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

    constructor(private wordsService: WordsService) { }

    ngOnInit() {
        this.wordsService.getList('words')
            .subscribe(words => {
                words.map(word => this.words.push(word));
            });
    }

    random() {
        let min = 0;
        let max = 7;
        let random = Math.random() * (max - min) + min;
        console.log(random.toFixed());
        this.word = this.words[random];
        console.log(this.words[random]);
    }

}
