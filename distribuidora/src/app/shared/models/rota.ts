import {Entrega} from './entrega';

export class Rota {
    public id: string;
    public dataInicio: Date;
    public estatus: string;
    public operador: string;
    public descricao: string;
    public emissor: string;
    public entregas: Entrega[];
}
