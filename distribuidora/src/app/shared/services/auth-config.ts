interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'tLJWb7k7Yg4ieRWgf3ScvO3n7dQI7hzR',
    domain: 'std.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};

export const LOCK_CONFIG =
    {
        allowedConnections: ['Username-Password-Authentication'],
        // oidcConformant: true,
        languageDictionary: {
            title: "Smart Tracking & Delivery",
        },
        autoclose: false,
        language: 'pt-BR',
        rememberLastLogin: false,
        theme: {
            logo: '../assets/img/iconfinder-65-512.png',
            primaryColor: '#7986cb'
        },
        additionalSignUpFields: [
            {
                // type: 'select',
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
                // type: 'select',
                name: "empresa",
                placeholder: "Selecione sua empresa",
                options: [
                    { value: "pepsicobr", label: "PepsiCo | Brasil" },
                    { value: "verdeFrota", label: "Verde Frota" }
                ],
                prefill: '{\"id\": \"6470683d-0ea2-4786-9efe-a76578a9c419\", \"name\": \"pepsico | br\",\"type\": \"distribuidora\"}',
                icon: '../assets/img/iconfinder-45-16.png'

                // options: function(cb) {
                //   // obtain options, in case of error you call cb with the error in the
                //   // first arg instead of null
                //   cb(null, options);
                // },
                // prefill: function(cb) {
                //   // obtain prefill, in case of error you call cb with the error in the
                //   // first arg instead of null
                //   cb(null, prefill);
                // }
            }]

    }