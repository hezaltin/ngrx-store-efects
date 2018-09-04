import { Component, OnInit, ChangeDetectionStrategy,OnDestroy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';  // removed beacause we are using the ngRx store Which is going to directly bound into the component

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromStore from '../../store';
import * as fromStoreRoot from '../../../app/store'

import { Pizza } from '../../models/pizza.model';
// import { PizzasService } from '../../services/pizzas.service';// removed beacause we are using the ngRx store Which is going to directly bound into the component

import { Topping } from '../../models/topping.model';
// import { ToppingsService } from '../../services/toppings.service';// removed beacause we are using the ngRx store Which is going to directly bound into the component
import {take,finalize} from 'rxjs/operators';
@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings: Topping[];
  subscription:any;


  constructor(
    // private pizzaService: PizzasService,
    // private toppingsService: ToppingsService,
    // private route: ActivatedRoute,
    // private router: Router // removed beacause we are using the ngRx store Which is going to directly bound into the component
    private store : Store<fromStore.ProductState>
  ) {}

  ngOnInit() {
    // this.pizzaService.getPizzas().subscribe(pizzas => {
    //   const param = this.route.snapshot.params.id;
    //   let pizza;
    //   if (param === 'new') {
    //     pizza = {};
    //   } else {
    //     pizza = pizzas.find(pizza => pizza.id == parseInt(param, 10));
    //   }
    //   this.pizza = pizza;
    //   this.toppingsService.getToppings().subscribe(toppings => {
    //     this.toppings = toppings;
    //     this.onSelect(toppings.map(topping => topping.id));
    //   });
    // }); // removed beacause we are using the ngRx store Which is going to directly bound into the component
    console.log('RouterInNNNNNN')
    this.store.dispatch(new fromStore.LoadToppings()); //dispatch the toppings event
   
    this.store.select(fromStoreRoot.getRouterState).pipe(finalize(()=>{console.log('finalize')}),take(1)).subscribe(routerName=>{
      console.log(`the name of the router is ${routerName.state.params.pizzaId}`);
      if(routerName.state.params.pizzaId){
        this.store.dispatch(new fromStoreRoot.Loadcollections(routerName.state.params.pizzaId));
      }
     
    },e=>{},()=>{
      console.log('completed')
    })
    //console.log(this.subscription)
    debugger
    this.pizza$ = this.store.select(fromStore.geteSelectedPizza);
    console.log(this.pizza$)
  }

  onSelect(event: number[]) {
    // let toppings;
    // if (this.toppings && this.toppings.length) {
    //   toppings = event.map(id =>
    //     this.toppings.find(topping => topping.id === id)
    //   );
    // } else {
    //   toppings = this.pizza.toppings;
    // }
    // this.visualise = { ...this.pizza, toppings }; // removed beacause we are using the ngRx store Which is going to directly bound into the component
  }

  onCreate(event: Pizza) {
    // this.pizzaService.createPizza(event).subscribe(pizza => {
    //   this.router.navigate([`/products/${pizza.id}`]);
    // }); // removed beacause we are using the ngRx store Which is going to directly bound into the component
  }

  onUpdate(event: Pizza) {
    // this.pizzaService.updatePizza(event).subscribe(() => {
    //   this.router.navigate([`/products`]);
    // }); // removed beacause we are using the ngRx store Which is going to directly bound into the component
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      // this.pizzaService.removePizza(event).subscribe(() => {
      //   this.router.navigate([`/products`]);
      // }); // removed beacause we are using the ngRx store Which is going to directly bound into the component
    }
  }
  ngOnDestroy(){
   // this.subscription.unsubscribe();
  }
}
