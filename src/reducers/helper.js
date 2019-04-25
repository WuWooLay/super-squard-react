import characterJson from '../data/characters.json';

export const createHero = (id) => {
	return characterJson.filter((data) => id === data.id)[0];
};
