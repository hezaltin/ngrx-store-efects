import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as pizzasActions from '../actions/pizza.actions'
import { switchMap,map,catchError } from 'rxjs/operators';
import * as fromServices from '../../services';
import {of} from 'rxjs/observable/of';

@Injectable()

export class PizzasEffects{
    constructor(private action$:Actions,private pizzaServices:fromServices.PizzasService){}

    @Effect()
    loadPizzas$ = this.action$.ofType(pizzasActions.LOAD_PIZZAS)
        .pipe(
            switchMap(() => {
                return this.pizzaServices.getPizzas().pipe(map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
                catchError(error=>of(new pizzasActions.LoadPizzasFail(error)))
            )
            })
        )
}

