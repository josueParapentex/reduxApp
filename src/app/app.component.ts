import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      console.log(state);
      this.contador = state.contador;
    });
  }

  incrementarContador() {
    this.store.dispatch(actions.incrementar());
  }
  decrementarContador() {
    this.store.dispatch(actions.decrementar());
  }
  cambioContador(contador: number) { this.contador = contador; }

}
