import {Action} from '@ngrx/store'

import {Pizza} from '../../models/pizza.model'

//load Pizzas

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';


export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
    // constructor(public payload:any){}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload:any){}
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload:any){}
}

//export Type

export type PizzaAction = LoadPizzas|LoadPizzasSuccess|LoadPizzasFail