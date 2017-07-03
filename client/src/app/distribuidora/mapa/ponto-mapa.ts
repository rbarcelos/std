import { SafeStyle } from '@angular/platform-browser';

import { PontoMapaContent } from './ponto-mapa-content';

export class PontoMapa {
    public lat: number;
    public long: number;
    public content: PontoMapaContent;
    public iconUrl: string;
    public iconStyle: any;
    public isOpen: boolean;
}
