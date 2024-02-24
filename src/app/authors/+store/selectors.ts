import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTHORS_FEATURE_STORE } from '../../const';
import { AuthorState } from './reducer';

export const selectFeature = createFeatureSelector<AuthorState>(AUTHORS_FEATURE_STORE);

export const selectAuthorsList = createSelector(
  selectFeature,
  (state) => state.list
);

export const selectAuthorsLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
);
