import { Type } from 'class-transformer';
import { Contato } from './contato';
import { Entrega } from './entrega';

export class Rota {

    public id: string;

    @Type(() => Date)
    public dataInicio: Date;

    public estatus: string;

    public operador: Contato;

    public descricao: string;

    public emissor: Contato;

    @Type(() => Date)
    public entregas: Entrega[];
}
