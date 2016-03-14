import { Component, OnInit, Input } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from "../common/model/hero";
import {HeroService} from "../common/services/hero.service";


@Component({
    selector: 'my-hero-detail',
    styleUrls:['src/hero-detail/hero-detail.component.css'],
    templateUrl: 'src/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}