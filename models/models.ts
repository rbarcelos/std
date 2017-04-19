export class Nota {
	public id: string;
    public valor: string;
}

export class Entrega {
    public destinatario: string;
    public endereco: string;
    public estatus: string;
    public data: string;
    public notas: Nota[];
}

export class Rota {
    public id: string;
    public dataInicio: string;
    public estatus: string;
    public operador: string;
    public entregas: Entrega[];
}