import * as fromToppings from '../actions/toppings.actions'
import {Topping} from '../../models/topping.model';


export interface ToppingState{
    //data:Pizza[],
    entites: {[id:number]:Topping}
    loaded:boolean,
    loading:boolean
}


export const initialState:ToppingState = {
        entites:{},
        loaded:false,
        loading:false
}

export function reducers(state=initialState, action:fromToppings.ToppingAction):ToppingState{
    switch(action.type){
        case fromToppings.LOAD_TOPPINGS:{
            return {
                ...state,
                loading:true
                
            }
        }
        case fromToppings.LOAD_TOPPINGS_SUCCESS:{
          console.log(action.payload);
          const toppings = action.payload;
          const entites= toppings.reduce((entites:{[id:number]:Topping},toppings:any)=>{
              return {
                ...entites,
                [toppings.id]:toppings
              };
          },{
            ...state.entites
          }
        )
            return {
                ...state,
                loading:false,
                loaded:true,
                entites
            }
        }
        case fromToppings.LOAD_TOPPINGS_FAIL:{
            return {
                ...state,
                loading:false,
                loaded:false
                
            }
        }
    }
    return state;
}

export const getToppingsEntites = (state:ToppingState) => state.entites;
export const getToppingsLoading = (state:ToppingState) => state.loading;
export const getToppingsLoaded = (state:ToppingState) => state.loaded;