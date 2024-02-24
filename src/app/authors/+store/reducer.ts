import { Author } from '../types';
import { createFeature, createReducer, on } from '@ngrx/store';
import { AUTHORS_FEATURE_STORE } from '../../const';
import { authorsListAPIActions } from './actions';

export interface AuthorState {
  list: Author[];
  isLoading: boolean;
  isPending: boolean;
}

export const initialState: AuthorState = {
  list: [],
  isLoading: false,
  isPending: false
};

export const authorsFeature = createFeature({
  name: AUTHORS_FEATURE_STORE,
  reducer: createReducer(initialState,
    on(authorsListAPIActions.load, (state) => ({
      ...state,
      isLoading: true
    })),
    on(authorsListAPIActions.loadSuccess, (state, { list }) => ({
      ...state,
      list,
      isLoading: false
    })),
    on(authorsListAPIActions.loadFailed, (state) => ({
      ...state,
      isLoading: false
    }))
  )
});


