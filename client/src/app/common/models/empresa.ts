import { EmpresaType } from "./empresa-type.enum";
import { Contato } from "./contato";

export class Empresa {

    public id: string;
    public name: string;

    public type: EmpresaType;

    public contato: Contato;

    get typeAsString(): string {
        return EmpresaType[this.type].toLowerCase();
    }
}
