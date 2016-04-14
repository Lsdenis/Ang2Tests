import { Injectable, Inject } from "angular2/core";
import { Http }               from "angular2/http";
import { Constants }          from "../constants";

@Injectable()
export class AppartmentsService {

  constructor(private http: Http) {

  }

  getAppartments() {
    // return this.http.get("http://localhost:63899/api/Apartment/GetApartments?direction=1&startId=")
    return this.http.get(Constants.API_URL + "api/Apartment/GetApartments?direction=1&startId=")
    .map(res => res.json());
  }
}
