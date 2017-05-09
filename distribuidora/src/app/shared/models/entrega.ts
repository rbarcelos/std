import {Address} from './address';
import {NotaFiscal} from './nota-fiscal';

export class Entrega {
    public destinatario: string;
    public endereco: Address;
    public estatus: string;
    public data: Date;
    public notas: NotaFiscal[];
}
