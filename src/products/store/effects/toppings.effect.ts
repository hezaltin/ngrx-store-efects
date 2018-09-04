import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as ToppingsActions from '../actions/toppings.actions'
import { switchMap,map,catchError } from 'rxjs/operators';
import * as fromServices from '../../services';
import {of} from 'rxjs/observable/of';

@Injectable()

export class ToppingsEffects{
    constructor(private action$:Actions,private toppingServices:fromServices.ToppingsService){}

    @Effect()
    loadToppings$ = this.action$.ofType(ToppingsActions.LOAD_TOPPINGS)
        .pipe(
            switchMap(() => {
                return this.toppingServices.getToppings().pipe(map(toppings => new ToppingsActions.LoadToppingsSuccess(toppings)),
                catchError(error=>of(new ToppingsActions.LoadToppingsFail(error)))
            )
            })
        )
}

