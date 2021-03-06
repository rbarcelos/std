import { Component, OnInit, NgZone, } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { MapService } from '../../common/services/map.service';
import { TaskManagerService } from '../../common/services/task-manager.service';
import { Rota } from '../../common/models/rota';
import { Address } from '../../common/models/address';
import { Entrega } from '../../common/models/entrega';
import { PontoMapaFactory } from './ponto-mapa-factory';
import { MapaComponent } from '../mapa/mapa.component';
import { PontoMapa } from '../mapa/ponto-mapa';
import { Observable, Observer } from 'rxjs';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

@Component({
    selector: 'rotas-cmp',
    templateUrl: './rotas.component.html',
    styleUrls: ['./rotas.component.css'],
    providers: [DataService, MapService, TaskManagerService],
    //    directives : [MapaComponent]
})
export class RotasComponent implements OnInit {

    title: string = 'My first angular2-google-maps project';
    currRota: Rota;
    mapaPontos: Array<PontoMapa> = [];
    pontoFactory: PontoMapaFactory = new PontoMapaFactory();

    constructor(private dataService: DataService, private mapService: MapService, private taskManager: TaskManagerService, private ngZone: NgZone, private loader: MapsAPILoader) { }

    ngOnInit() {
    }

    loadMap() {
        return Observable.fromPromise(this.loader.load());
    }

    loadRota() {
        this.dataService.retrieveRotas().subscribe(
            result => {
                // needs to run inside zone to update the map
                this.ngZone.run(() => {
                    this.taskManager.waitAll(result.entregas, this.mapService.resolveEntrega.bind(this.mapService)).subscribe(
                        batchResult => {
                            this.ngZone.run(() => {
                                for (let idx in batchResult) {
                                    var res: any = batchResult[idx];

                                    var ponto = this.pontoFactory.create(Number(idx), result.entregas[idx], res)
                                    this.mapaPontos.push(ponto)
                                }

                                this.currRota = result;
                            });
                        },
                        error => console.log(error),
                        () => console.log('Enderecos loaded')
                    );
                }
                )
            });
    }

    resolveEntrega(entrega: Entrega) {
        return this.mapService.resolveEntrega(entrega);
    }
}


