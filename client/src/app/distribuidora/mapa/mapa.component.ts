import { Component, OnInit, NgZone, Input, Output, EventEmitter, DoCheck, IterableDiffers, IterableDiffer, ViewChild } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { MapService } from '../../common/services/map.service';
import { TaskManagerService } from '../../common/services/task-manager.service';
import { PontoMapa } from './ponto-mapa';
import { GoogleMapsAPIWrapper, MapsAPILoader, AgmMap } from '@agm/core';
import { Observable, Observer } from 'rxjs';

declare var google: any;

@Component({
    selector: 'mapa-cmp',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css'],
    providers: [DataService, MapService, TaskManagerService]
})
export class MapaComponent implements OnInit, DoCheck {
    @Input("Pontos") mapaPontos: Array<PontoMapa>;
    @Output("OnMapLoaded") mapLoadedEvent: EventEmitter<any> = new EventEmitter();

    isMapLoaded: boolean;
    pontosDiffer: IterableDiffer<PontoMapa>;

    mapaBounds: any;

    constructor(private loader: MapsAPILoader, differs: IterableDiffers) {
        this.pontosDiffer = differs.find([]).create(null);
    }

    ngOnInit() {
        this.loadMap().subscribe(() => {
            this.mapaBounds = new google.maps.LatLngBounds();
            this.mapLoadedEvent.emit();
        });
    }

    ngDoCheck() {
        const pontosChanges = this.pontosDiffer.diff(this.mapaPontos);
        if (pontosChanges) {
            let newBound = new google.maps.LatLngBounds();
            console.log('new change');// for splitting up changes
            pontosChanges.forEachAddedItem(r => {
                console.log('added ', r);
                newBound.extend(new google.maps.LatLng(r.item.lat, r.item.long));
            });
            pontosChanges.forEachRemovedItem(r => console.log('removed ', r))
            pontosChanges.forEachMovedItem(r => console.log('moved ', r))
            this.mapaBounds = newBound;
        }
    }

    // clickedMarker(clickedPonto: PontoMapa) {
    //     this.pontoClickedEvent.emit(clickedPonto);
    // }

    // markerDismissed() {
    //     this.selectedPonto = null;
    //     this.pontoClickedEvent.emit(null);
    // }

    private loadMap() {
        return Observable.create(observer => {
            if (this.isMapLoaded) {
                observer.next({});
                observer.complete();
                console.log('Map already loaded');
            }
            else {
                console.log('Loading Map');
                this.loader.load().then(
                    () => {
                        this.isMapLoaded = true;
                        observer.next({});
                        observer.complete();
                        console.log('Map loaded');
                    });
            }
        });
    }
}


