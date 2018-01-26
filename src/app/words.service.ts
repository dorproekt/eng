import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WordsService {

    constructor(private db: AngularFireDatabase) { }

    getList(path: string): Observable<any[]> {
        return this.db.list(path).valueChanges();
    }

    addWord(word: Object): any {
        this.db.list('words').push(word);
    }

    test() {
        return this.db.list('words').valueChanges();
    }

}
