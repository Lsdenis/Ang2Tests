import {Component} from "angular2/core";
import {AppartmentsComponent} from "../appartments/appartments.component";

@Component({
  selector: "arendator",
  templateUrl: "app/components/app/app.component.html",
  directives: [AppartmentsComponent]
})

export class AppComponent {
  title: string = "Appartments";
}
