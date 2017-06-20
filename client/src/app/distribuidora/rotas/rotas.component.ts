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

import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    selector: 'rotas-cmp',
    templateUrl: './rotas.component.html',
    styleUrls: ['./rotas.component.css'],
    providers: [DataService, MapService, TaskManagerService],
    //    directives : [MapaComponent]
})
export class RotasComponent implements OnInit {

    messages =
    {
        // Message to show when array is presented
        // but contains no values
        emptyMessage: 'Sem dados para mostrar',

        // Footer total message
        totalMessage: 'Total'
    };

    loading: boolean = true;
    selected = [];
    rotas: Array<Rota> = [];
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

                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.rotas.push(result);
                                this.loading = false;
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

    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
    }
}


