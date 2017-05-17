import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor() { }

    public deleteUser(): Observable<boolean> {
        return Observable.of(true);
    }
}