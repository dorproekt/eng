import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WordsService {
    constructor(private db: AngularFireDatabase) { }

    getList(path: string): Observable<any[]> {
        return this.db.list(path).valueChanges();
    }

    getListKey(path: string): Observable<any[]> {
        return this.db.list(path).snapshotChanges(['child_added']);
    }

    addWord(word: Object): any {
        this.db.list('words').push(word);
    }

    delete(key: string) {
        return this.db.list('words').remove(key);
    }

    edit(key: string, data: object) {
        return this.db.list('words').update(key, data);
    }

    test() {
        const itemRef = this.db.list('words').snapshotChanges(['child_added']);
        itemRef.subscribe(actions => {
            actions.forEach(action => {
                // console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
            });
        });
    }

}
