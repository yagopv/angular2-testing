import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {HeroService} from "../common/services/hero.service";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {Hero} from "../common/model/hero";

@Component({
    selector: 'my-heroes',
    styleUrls:['src/heroes/heroes.component.css'],
    templateUrl: 'src/heroes/heroes.component.html',
    directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes : Hero[];

    constructor(
        private _heroService: HeroService,
        private _router: Router) { }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}