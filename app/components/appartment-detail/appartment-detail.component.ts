import { Component, Input }   from "angular2/core";
import { Appartment }         from "../../classes/appartment";
import { ComponentSelectors } from "../component-selectors";
import { Constants }          from "../../constants";

@Component ({
  selector: ComponentSelectors.APPARTMENT_DETAIL,
  templateUrl: Constants.TEMPLATE_URL_PATH + "appartment-detail.component.html"
})

export class AppDetailComponent {
  @Input()
  public appartment: Appartment;
}
