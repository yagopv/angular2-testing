import {Component} from "angular2/core";
import {Route} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroService} from "../common/services/hero.service";
import {HeroesComponent} from "../heroes/heroes.component";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Component({
    selector: 'my-app',
    styleUrls: ['src/app/app.component.css'],
    templateUrl: 'src/app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent {
    public title = 'Tour of Heroes';
}