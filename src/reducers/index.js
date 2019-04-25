import { characters } from './characters';
import { heros } from './heros';

import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
	characters,
	heros
});
