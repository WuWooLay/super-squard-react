import React from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from '@material-ui/core';

const Character = (props) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar alt={`Avatar id ${props.character.id}`} src={`${props.character.image}`} />
			</ListItemAvatar>

			<ListItemText primary={props.character.name} />

			<ListItemSecondaryAction>
				<Checkbox
					onChange={() => {
						props.add(props.character.id);
					}}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default Character;
