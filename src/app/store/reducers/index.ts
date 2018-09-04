
import {Params, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromCollection from './collection.reducers';

// type check for the State Object
export interface RouterStateUrl{
    url:string;
    queryParams:Params;
    params: Params
}

export interface State{
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
    collections: fromCollection.CollectionState;
}

export const reducers :ActionReducerMap<State>= {
    routerReducer: fromRouter.routerReducer,
    collections: fromCollection.reducers
}
// Creat the rootReducer Object
export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export const getCollectionNameState = createFeatureSelector<any>('collections');

export const getCollectionName= createSelector(getCollectionNameState,fromCollection.getCollection);

// create the custo serializer to get the Route parameters and form the new objec; this calss will call whenever the route changes

export class CustoumSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot):RouterStateUrl{
        const {url} =routerState;

        const {queryParams} = routerState.root;

        let state:ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild){
            state = state.firstChild
        }
        const {params} = state;
        return {url,queryParams,params};
    }

}