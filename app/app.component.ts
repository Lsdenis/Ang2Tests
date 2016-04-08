import {Component} from "angular2/core";
import {Appartment} from "./classes/appartment";
import {AppartmentsService} from "./services/appartments.service";

var APPARTMENTS: Appartment[] = [
  {"street": "first", "image": "first"},
  {"street": "second", "image": "second"},
  {"street": "third", "image": "third"},
]


@Component({
  selector: "my-app",
  template: `
    <h3>{{title}}</h3>`
    // <ul>
    //   <li *ngFor="#app of appartments" (click)='onSelect(app)'>{{app.street}}</li>
    // </ul>
    // <div *ngIf="selectedApp">
    //   <label>street: </label>
    //   <input [(ngModel)]='selectedApp.street'>
    // </div>
  ,
  providers: [AppartmentsService]
})

export class AppComponent {
  title = 'Appartments';

  public appartments;
  selectedApp: Appartment;

  onSelect(app: Appartment) {
    this.selectedApp = app;
  }

  constructor(private _appService: AppartmentsService) {
    this.appartments = _appService.getAppartments();
  }
}
