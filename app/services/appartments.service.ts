import {Injectable, Inject} from "angular2/core";
import {Http, HTTP_PROVIDERS, Headers} from "angular2/http";

@Injectable()
export class AppartmentsService {

private data: JSON;

  constructor(private http: Http) {

  }

  getAppartments() {
    // return this.http.get("http://localhost:63899/api/Apartment/GetApartments?direction=1&startId=")
    return this.http.get("http://apiarendator.azurewebsites.net/api/Apartment/GetApartments?direction=1&startId=")
    // return this.http.get("http://flimsapi-denisp.rhcloud.com/api/films")
    .map(res => res.json());
//       .subscribe(
//         data => { this.data = data },
//         err => console.error(err)
//       );
// debugger;
//       return this.data;
  }
}
