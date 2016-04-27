import { Component, ElementRef, OnInit } from "angular2/core";
import { ComponentSelectors } from "../component-selectors";
import { Constants } from "../../constants";
import { ROUTER_DIRECTIVES } from "angular2/router";

declare var Materialize:  any;
declare var $: any;

@Component({
  selector: ComponentSelectors.HOME,
  templateUrl: Constants.TEMPLATE_URL_PATH + "home.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
  constructor(private _element: ElementRef) {
  }

  private _slider: any;
  private _isInitialized: Boolean;

  ngOnInit() {
    $(this._element.nativeElement).find(".parallax").parallax();
    this._slider = $(this._element.nativeElement).find(".slider");

    this._slider.scrollspy({
      min: this._slider.offset().top - 550,
      onEnter: () => {
        if (!this._isInitialized)
        {
          this._slider.slider({ height: "100%", interval: 4000, transition: 750 });
          this._isInitialized = true;
        }
      }
    });
  }
}
