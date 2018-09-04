import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromPizzas from '../reducers/pizza.reducers';
import * as fromToppings from '../reducers/toppings.reducers';

export interface ProductState{
    pizzas: fromPizzas.PizzaState,
    toppings: fromToppings.ToppingState
}

export const reducers:ActionReducerMap<ProductState>={
    pizzas: fromPizzas.reducers,
    toppings: fromToppings.reducers
}


export const getProductState = createFeatureSelector<ProductState>('products');

