import {Component} from "angular2/core";
import {Appartment} from "../../classes/appartment";
import {AppartmentsService} from "../../services/appartments.service";
import {AppDetailComponent} from "../appartment-detail/appartment-detail.component";

@Component({
  selector: "appartments",
  templateUrl: "app/components/appartments/appartments.component.html",
  providers: [AppartmentsService],
  directives: [AppDetailComponent]
})

export class AppartmentsComponent {
  public appartments: Appartment[];
  public error: any;

  public selectedApp: Appartment;

  onSelect(app: Appartment) {
    this.selectedApp = app;
  }

  constructor(private _appService: AppartmentsService) {
    _appService.getAppartments().subscribe(
          data => { this.appartments = data.Data.Items },
          err => { this.error = err }
    );
  }
}
