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

  ngOnInit() {
    //   var options = [
    //   {selector: '.class', offset: 200, callback: customCallbackFunc } },
    //   {selector: '.other-class', offset: 200, callback: function() {
    //     customCallbackFunc();
    //   } },
    // ];
    $(this._element.nativeElement).find(".parallax").parallax();
    this._slider = $(this._element.nativeElement).find(".slider");

    var options = [
      { selector: '.parallax', offset: 1350, callback: () => this._slider.slider({ height: "750px", interval: 3000, transition: 750 })
 },
    ];
    Materialize.scrollFire(options);
  }
}
