import { createStore } from 'redux';
import { IinitialState } from 'src/types/types';
import MovieApp from "./reducers";


export const store: IinitialState = createStore(MovieApp);
//const unsubscribe = store.subscribe(() => console.log(store.getState()))


