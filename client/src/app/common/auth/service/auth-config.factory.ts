import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from "rxjs/Rx";
import { Empresa } from "../../models/empresa";

interface AuthConfig {
    clientID: string;
    domain: string;
}


@Injectable()
export class AuthConfigFactory {
    constructor(public dataService: DataService) { }

    public createAuthConfig(): AuthConfig {
        var config: AuthConfig = {
            clientID: 'tLJWb7k7Yg4ieRWgf3ScvO3n7dQI7hzR',
            domain: 'std.auth0.com'
        };

        return config;
    }

    public createLockConfig(): Auth0LockConstructorOptions {
        var config: Auth0LockConstructorOptions =
            {
                // container: 'root',
                allowedConnections: ['Username-Password-Authentication'],
                languageDictionary: {
                    title: "Smart Tracking & Delivery",
                },
                // auth: {
                //     redirectUrl: 'http://localhost:4200/callback',
                //     responseType: 'token id_token',
                // },
                language: 'pt-BR',
                rememberLastLogin: false,
                closable: false,
                theme: {
                    logo: '../assets/img/iconfinder-65-512.png',
                    primaryColor: '#7986cb'
                },
                additionalSignUpFields: [
                    {
                        name: "full_name",
                        placeholder: "Entre seu nome",
                        icon: '../assets/img/name.svg',
                        validator: function (name) {
                            return {
                                valid: name.length >= 3,
                                hint: "Deve ter no minimo 3 letras"
                            }
                        }
                    },
                    {
                        type: 'select',
                        name: "empresa_id",
                        placeholder: "Selecione sua empresa",
                        icon: '../assets/img/office.svg',
                        options: this.getEmpresas.bind(this)
                    }]

            };

        return config;
    }

    private getEmpresas(callback) {
        this.dataService.retrieveEmpresas()
            .subscribe(
            result => {
                callback(null, this.toOptions(result));
            });
    }

    private toOptions(empresas: Empresa[]): Auth0LockAdditionalSignUpFieldOption[] {
        let options: Auth0LockAdditionalSignUpFieldOption[];

        let titleCase = new TitleCasePipe();

        options = empresas.map((empresa) => {
            return { value: empresa.id, label: titleCase.transform(empresa.name) };
        });

        return options;
    }
}


