import { Component }                                        from "angular2/core";
import { AppartmentsComponent }                             from "../appartments/appartments.component";
import { AppDetailComponent }                               from "../appartment-detail/appartment-detail.component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";
import { ComponentSelectors }                               from "../component-selectors";
import { HomeComponent }                                    from "../home/home.component";
import { Constants }                                        from "../../constants";

@Component({
  selector: ComponentSelectors.ARENDATOR,
  templateUrl: Constants.TEMPLATE_URL_PATH + "app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: "/Home", name: "Home", component: HomeComponent, useAsDefault: true },
  { path: "/Appartments", name: "Appartments", component: AppartmentsComponent },
])

export class AppComponent {
  title: string = "Арендатор.бай";
}
