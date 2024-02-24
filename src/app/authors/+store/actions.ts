import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Author } from '../types';

export const authorsListAPIActions = createActionGroup({
  source: 'Authors List API',
  events: {
    load: emptyProps(),
    'load success': props<{ list: Author[] }>(),
    'load failed': emptyProps()
  }
});
