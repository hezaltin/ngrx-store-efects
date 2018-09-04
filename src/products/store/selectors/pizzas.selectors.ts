

import {createSelector} from '@ngrx/store';

import * as fromRoot from '../../../app/store'
import * as fromFeature from '../reducers'
import * as fromPizzas from '../reducers/pizza.reducers';
import {Pizza} from '../../models/pizza.model'
import { state } from '@angular/animations';

export const getPizzaState = createSelector(fromFeature.getProductState, (state:fromFeature.ProductState)=>state.pizzas);

export const getPizzasEntites= createSelector(getPizzaState,fromPizzas.getPizzasEntites);

export const geteSelectedPizza = createSelector(
    getPizzasEntites,
    fromRoot.getRouterState,
    (entities,router) :Pizza=>{
        //debugger
        return router.state && entities[router.state.params.pizzaId];
    }
)


export const getAllPizzas= createSelector(getPizzasEntites,(entites)=>{
    return Object.keys(entites).map( id => entites[parseInt(id,10)] )
})

export const getPizzasLoaded= createSelector(getPizzaState,fromPizzas.getpizzasLoaded);
export const getPizzasLoading= createSelector(getPizzaState,fromPizzas.getPizzasLoading);