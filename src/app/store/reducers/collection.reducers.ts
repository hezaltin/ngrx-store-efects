import * as fromPizzas from '../actions/load-collection.action'
//import {Pizza} from '../../models/pizza.model';



export interface CollectionState{
  collection:any
}


export const initialState:CollectionState ={
      collection:null
}

export function reducers(state=initialState, action:fromPizzas.PizzaAction):CollectionState{
        switch(action.type){
            case fromPizzas.LOAD_COLLECTION:{
                const collections = action.payload
                return {
                    ...state,
                    collection:collections
                    
                }
            }
            // case fromPizzas.LOAD_COLLECTION_SUCCESS:{
            //   console.log(action.payload);
            //   const pizzas = action.payload;
            //   const entites= pizzas.reduce((entites:{[id:number]:Pizza},pizzas:any)=>{
            //       return {
            //         ...entites,
            //         [pizzas.id]:pizzas
            //       };
            //   },{
            //     ...state.entites
            //   }
            // )
            //     return {
            //         ...state,
            //         loading:false,
            //         loaded:true,
            //         entites
            //     }
            // }
            
        }
        return state;
}

export const getCollection = (state:CollectionState) => state.collection;

