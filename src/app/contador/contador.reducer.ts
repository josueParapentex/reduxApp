import { Action, createReducer, on, props } from '@ngrx/store';
import * as actions from './contador.actions';

export const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(actions.incrementar, state => state + 1),
  on(actions.decrementar, state => state - 1),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero),
  on(actions.reset, state => initialState),
);

export function contadorReducer(state, action) {
  return counterReducer(state, action);
}
