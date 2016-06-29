import { Component } from '@angular/core';

@Component({
    selector:'enter-blur-event',
    template: require('./EnterBlurEvent.html'),
    styles:[require('./EnterBlurEvent.scss')]
})

export class EnterBlurEventComponent {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}