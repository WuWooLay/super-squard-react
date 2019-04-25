export const ADD_CHARACTER = 'ADD_CHARACTER';

export const addCharacter = (id) => {
	const action = {
		type: ADD_CHARACTER,
		id
	};
	return action;
};

export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export const removeCharacter = (id) => {
	const action = {
		type: REMOVE_CHARACTER,
		id
	};
	return action;
};
