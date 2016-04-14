import { Component }                  from "angular2/core";
import { Appartment }                 from "../../classes/appartment";
import { AppartmentsService }         from "../../services/appartments.service";
import { AppDetailComponent }         from "../appartment-detail/appartment-detail.component";
import { Router, ROUTER_DIRECTIVES }  from 'angular2/router';
import { ComponentSelectors }         from "../component-selectors";
import { Constants }                  from "../../constants";

@Component({
  selector: ComponentSelectors.APPARTMENTS,
  templateUrl: Constants.TEMPLATE_URL_PATH + "appartments.component.html",
  providers: [AppartmentsService],
  directives: [ROUTER_DIRECTIVES]
})

export class AppartmentsComponent {
  public appartments: Appartment[];
  public error: any;

  public selectedApp: Appartment;

  onSelect(app: Appartment) {
    this.selectedApp = app;
  }

  constructor(private _router: Router, private _appService: AppartmentsService) {
    _appService.getAppartments().subscribe(
      data => { this.appartments = data.Data.Items },
      err => { this.error = err }
    );
  }
}
