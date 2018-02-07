import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    words: Array<object> = [];
    isVisibleModal = false;
    editData: object;

    constructor(private wordService: WordsService) { }

    ngOnInit() {

        this.wordService.getListKey('words')
            .subscribe(words => {
                words.forEach(word => {
                    this.words.push({
                        key: word.key,
                        en: word.payload.val().en,
                        ru: word.payload.val().ru
                    });
                });
                this.words.reverse();
            });

    }

    delete(key, i) {
        this.wordService.delete(key)
            .then( _ => {
                const res = this.words.splice(i, 1);
                console.log('Слово удалено!', res);
            })
            .catch(err => console.log(err, 'You do not have access!'));
    }

    edit(i, ru, en, key) {
        this.isVisibleModal = true;
        this.editData = {
            i,
            ru,
            en,
            key
        };
    }

    cancelModal() {
        this.isVisibleModal = false;
    }

    saveEdit() {
        this.wordService.edit(this.editData['key'], this.editData)
            .then(_ => {
                this.words[this.editData['i']] = this.editData;
                this.isVisibleModal = false;
            });
    }
}
