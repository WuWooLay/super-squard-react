import React from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from '@material-ui/core';

const Hero = (props) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar alt={`Avatar id ${props.hero.id}`} src={`${props.hero.image}`} />
			</ListItemAvatar>

			<ListItemText primary={props.hero.name} />

			<ListItemSecondaryAction>
				<Checkbox
					checked={true}
					onChange={() => {
						props.remove(props.hero.id);
					}}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default Hero;
