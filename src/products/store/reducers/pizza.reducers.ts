import * as fromPizzas from '../actions/pizza.actions'
import {Pizza} from '../../models/pizza.model';



export interface PizzaState{
    //data:Pizza[],
    entites: {[id:number]:Pizza}
    loaded:boolean,
    loading:boolean
}


export const initialState:PizzaState ={
        entites:{},
        loaded:false,
        loading:false
}

export function reducers(state=initialState, action:fromPizzas.PizzaAction):PizzaState{
        switch(action.type){
            case fromPizzas.LOAD_PIZZAS:{
                return {
                    ...state,
                    loading:true
                    
                }
            }
            case fromPizzas.LOAD_PIZZAS_SUCCESS:{
              console.log(action.payload);
              const pizzas = action.payload;
              const entites= pizzas.reduce((entites:{[id:number]:Pizza},pizzas:any)=>{
                  return {
                    ...entites,
                    [pizzas.id]:pizzas
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
            case fromPizzas.LOAD_PIZZAS_FAIL:{
                return {
                    ...state,
                    loading:false,
                    loaded:false
                    
                }
            }
        }
        return state;
}

export const getPizzasEntites = (state:PizzaState) => state.entites;
export const getPizzasLoading = (state:PizzaState) => state.loading;
export const getpizzasLoaded = (state:PizzaState) => state.loaded;

