import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createHero } from './helper';

export const heros = (state = [], action) => {
	switch (action.type) {
		case ADD_CHARACTER:
			return [ ...state, createHero(action.id) ];
		case REMOVE_CHARACTER:
			return state.filter((data) => data.id !== action.id);
		default:
			return state;
	}
};
