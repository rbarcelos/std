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
import { CalendarPipe } from 'angular2-moment';

@Component({
    selector: 'rotas-cmp',
    templateUrl: './rotas.component.html',
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
    mapaLoaded: boolean = false;
    selectedRoute = [];
    selectedEntrega = [];
    selectedPonto: PontoMapa;
    rotas: Array<Rota> = [];
    mapaPontos: Array<PontoMapa> = [];
    pontoFactory: PontoMapaFactory = new PontoMapaFactory();

    constructor(
        private dataService: DataService,
        private mapService: MapService,
        private taskManager: TaskManagerService,
        private ngZone: NgZone,
        private mapaLoader: MapsAPILoader) {
    }

    ngOnInit() {
        this.loadMap();
        this.loadRota();
    }

    loadMap() {
        return Observable.fromPromise(this.mapaLoader.load());
    }

    get isRouteSelected(): boolean {
        return this.selectedRoute != null && this.selectedRoute.length > 0;
    }

    loadRota() {
        this.dataService.retrieveRotas().subscribe(
            result => {
                this.rotas = result;
                this.loading = false;
            }
        );
    }

    mapLoaded() {
        if (!this.mapaLoaded) {
            this.loadEntregas(this.selectedRoute[0]);
            this.mapaLoaded = true;
        }
    }

    loadEntregas(rota: Rota) {
        this.mapaPontos = [];
        // needs to run inside zone to update the map
        this.ngZone.run(() => {
            this.taskManager.waitAll(rota.entregas, this.mapService.resolveEntrega.bind(this.mapService)).subscribe(
                batchResult => {
                    this.ngZone.run(() => {
                        for (let idx in batchResult) {
                            var res: any = batchResult[idx];
                            var ponto = this.pontoFactory.create(Number(idx), rota.entregas[idx], res)
                            this.mapaPontos.push(ponto)
                        }
                    });
                },
                error => console.log(error),
                () => console.log('Enderecos loaded')
            );
        }
        );
    }

    onSelectRoute({ selected }) {
        console.log('Selected Route', this.selectedRoute);
        if (this.mapaLoaded) {
            this.loadEntregas(this.selectedRoute[0]);
        }
    }

    onSelectEntrega({ selected }) {
        selected[0].isOpen = !selected[0].isOpen;
    }


}


