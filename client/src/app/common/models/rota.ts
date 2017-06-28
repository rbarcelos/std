import { Type } from 'class-transformer';
import { Contato } from './contato';
import { Entrega } from './entrega';

export class Rota {

    public id: string;
    public dataInicio: Date;

    public estatus: string;

    public operador: Contato;

    public descricao: string;

    public emissor: Contato;

    public entregas: Entrega[];
}
