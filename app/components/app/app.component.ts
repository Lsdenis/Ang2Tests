import {Component} from "angular2/core";
import {AppartmentsComponent} from "../appartments/appartments.component";
import {AppDetailComponent} from "../appartment-detail/appartment-detail.component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: "arendator",
  templateUrl: "app/components/app/app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: "/", name: "Appartments", component: AppartmentsComponent },
  { path: "/Appartment", name: "AppDetail", component: AppDetailComponent },
])

export class AppComponent {
  title: string = "Арендатор.бай";
}
