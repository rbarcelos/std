import { isThisParameter } from 'tsutils/src';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}


@Injectable()
export class AuthConfigFactory {
    constructor(public dataService: DataService) { }

    public createAuthConfig(): AuthConfig {
        var config: AuthConfig = {
            clientID: 'tLJWb7k7Yg4ieRWgf3ScvO3n7dQI7hzR',
            domain: 'std.auth0.com',
            callbackURL: 'http://localhost:4200/callback'
        };

        return config;
    }

    public createLockConfig(): Auth0LockConstructorOptions {
        var config: Auth0LockConstructorOptions =
            {
                allowedConnections: ['Username-Password-Authentication'],
                languageDictionary: {
                    title: "Smart Tracking & Delivery",
                },
                language: 'pt-BR',
                rememberLastLogin: false,
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
                        name: "empresa",
                        placeholder: "Selecione sua empresa",
                        icon: '../assets/img/office.svg',
                        options: this.getEmpresas.bind(this)
                    }]

            };

        return config;
    }

    private getEmpresas(callback) {
        this.dataService.retrieveEmpresas().subscribe(
            result => {
                var options = [
                    { value: "{\"id\": \"6470683d-0ea2-4786-9efe-a76578a9c419\", \"name\": \"pepsico | br\",\"type\": \"distribuidora\"}", label: "PepsiCo | Brasil" },
                    { value: "{\"id\": \"ce9cea1e-c3f3-4c0c-8f1d-87707e70791d\", \"name\": \"verde frota\",\"type\": \"transportadora\"}", label: "Verde Frota" }
                ];
                callback(null, options);
            });
    }
}


