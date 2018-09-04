import {Action} from '@ngrx/store'

//import {Pizza} from '../../models/pizza.model'

//load Collection

export const LOAD_COLLECTION = '[Collection] Load Collection';
// export const LOAD_COLLECTION_SUCCESS = '[Collection] Load Collection Success';
// export const LOAD_COLLECTION_FAIL = '[Collection] Load Collection Fail';


export class Loadcollections implements Action {
    readonly type = LOAD_COLLECTION;
     constructor(public payload:any){}
}

// export class LoadcollectionsSuccess implements Action {
//     readonly type = LOAD_COLLECTION_SUCCESS;
//     constructor(public payload:any){}
// }

// export class LoadcollectionsFail implements Action {
//     readonly type = LOAD_COLLECTION_FAIL;
//     constructor(public payload:any){}
// }

//export Type

export type PizzaAction = Loadcollections;