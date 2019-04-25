import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
        flexGrow: 1,
        marginBottom: 10
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

const Header = (props) => {
	return (
		<div style={styles.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">
                        Choose 3 Hero For Your Squard
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
