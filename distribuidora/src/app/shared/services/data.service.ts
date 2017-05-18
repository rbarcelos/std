import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import { Rota } from '../models/rota';
import { Empresa } from '../models/empresa';
import { Http, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs';

import * as Collections from 'typescript-collections';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    retrieveRotas(): Observable<Rota> {
        return this.http.get("assets/data/rotas.json")
            .map(this.extractData)
            .catch(this.handleError);
    }

    retrieveEmpresas(): Observable<Collections.Dictionary<string, Empresa>> {
        return this.http.get("assets/data/empresas.json")
            .map(this.extractData)
            .catch(this.handleError)
            .map(this.toDictionary);
    }

    private toDictionary(empresas: Observable<Empresa[]>): Collections.Dictionary<string, Empresa> {
        var dict = new Collections.Dictionary<string, Empresa>();

        return dict;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || null;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
