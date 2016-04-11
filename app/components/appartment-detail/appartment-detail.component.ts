import {Component, Input} from "angular2/core";
import {Appartment} from "../../classes/appartment";

@Component ({
  selector: "appartment-detail",
  templateUrl: "app/components/appartment-detail/appartment-detail.component.html"
})

export class AppDetailComponent {
  @Input()
  public appartment: Appartment;
}
