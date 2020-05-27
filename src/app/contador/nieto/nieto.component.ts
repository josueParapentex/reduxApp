import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

}
