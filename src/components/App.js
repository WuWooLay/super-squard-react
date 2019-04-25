import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacter, removeCharacter } from '../actions';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Character from './Character';
import Hero from './Hero';
import Total from './Total';
import Header from './Header';
import { List, ListSubheader } from '@material-ui/core';

import Thanos from './assets/thanos.jpg';

const style = {
	root: {
		flexGrow: 1,
		minHeight: '100vh',
		backgroundImage: `url(${Thanos})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed'
	},
	paper: {
		padding: '.5rem',
		backgroundColor: 'rgba(255,255,255,0.8)'
	},
	padding: {
		padding: '.5rem'
	}
};

class App extends Component {
	render() {
		return (
			<div style={style.root}>
				
				<Header />

				<div style={style.padding}>
					<Grid container spacing={16}>
						<Grid item xs={12} sm={4}>
							<Paper style={style.paper}>
								<List subheader={<ListSubheader component="div"> Character List </ListSubheader>}>
									{this.props.characters.map((data) => (
										<Character key={data.id} character={data} add={this.props.addCharacter} />
									))}
								</List>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Paper style={style.paper}>
								<List subheader={<ListSubheader component="div"> Choose List </ListSubheader>}>
									{this.props.heros.map((data) => (
										<Hero key={data.id} hero={data} remove={this.props.removeCharacter} />
									))}
								</List>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Paper style={style.paper}>
								<h3> Total </h3>
								<Total total={this.props.heros} />
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	characters: state.characters,
	heros: state.heros
});

export default connect(mapStateToProps, { addCharacter, removeCharacter })(App);
