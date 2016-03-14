import { Component, OnInit } from 'angular2/core';
import {Router} from "angular2/router";
import {Hero} from "../common/model/hero";
import {HeroService} from "../common/services/hero.service";


@Component({
    selector: 'my-dashboard',
    styleUrls:['src/dashboard/dashboard.component.css'],
    templateUrl: 'src/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private _heroService: HeroService,
        private _router: Router) { }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}