import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment by 5');
export const decrement = createAction('[Counter Component] Decrement by 5');
export const reset = createAction('[Counter Component] Reset');