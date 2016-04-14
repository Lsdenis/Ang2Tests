import 'rxjs/Rx';
import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS } from 'angular2/http';
import { AppComponent } from "./components/app/app.component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
