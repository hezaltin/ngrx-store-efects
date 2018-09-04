import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {StoreRouterConnectingModule,RouterStateSerializer} from '@ngrx/router-store'; // used to connect the Routes using ngRx
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; // Effect Module is used for the Async Calls which actually outside the angular which will get the service data and given it to the reducers
import {reducers,CustoumSerializer} from './store'; // Used for ngRx Store Router logics

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// bootstrap
import { AppComponent } from './containers/app/app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }), // connet the reducers in the AppModule
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers:[{provide:RouterStateSerializer, useClass:CustoumSerializer}], // Provide or dependency injection to inject the angular RouterStateSerializer an tell angular to use the class of  CustoumSerializer
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
