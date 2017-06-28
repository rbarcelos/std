import { Type } from 'class-transformer';
import { Empresa } from "./empresa";
export class Profile {

    public name: string;

    public email: string;

    public empresa: Empresa;

    public locale: string;

    public region: string;

    public isAdmin: boolean;

}
