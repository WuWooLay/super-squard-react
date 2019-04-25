import characterJson from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createHero } from './helper';

export const characters = (state = characterJson, action) => {
	switch (action.type) {
		case ADD_CHARACTER:
			return state.filter((data) => data.id !== action.id);
		case REMOVE_CHARACTER:
			return [ ...state, createHero(action.id) ];
		default:
			return state;
	}
};
