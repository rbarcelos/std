import { Empresa } from "app/shared/models/empresa";
export class Profile {
    public name: string;
    public email: string;
    public empresa: Empresa;
    public locale: string;
    public region: string;


    public static fromAuth0Profile(auth0Profile: any): Profile {
        var prof = new Profile();
        var userMetadata = auth0Profile['user_metadata'];
        prof.name = userMetadata['full_name'];
        prof.empresa = JSON.parse(userMetadata['empresa']);
        prof.email = auth0Profile['email'];
        return prof;
    }

}
