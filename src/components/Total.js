import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SendIcon from '@material-ui/icons/Send';

class Total extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		let resultText = '';
		let total = {
			strength: 0,
			intelligence: 0,
			speed: 0,
			all: 0
		};
		this.props.total.map((data) => {
			total.strength += data.strength;
			total.intelligence += data.intelligence;
			total.speed += data.speed;
			total.all += data.strength + data.intelligence + data.speed;
		});

		if (this.props.total.length < 3) {
			resultText = `ရွေးအူး သားယေ... ၃ခုရွေးခိုင်းတာ မမြင်ရင် အပေါ်က စာဖတ်ကြည့် ။ Choose 3 Hero For Your Squard .. `;
		} else if (this.props.total.length === 3) {
			if (total.all > 79) {
				resultText = ` Sayar gyi pal hey !! `;
			} else {
				resultText = ` Weak Tay Dal Hey !! `;
			}
			resultText += this.props.total.map(
				(data) => (data.name === 'Hulk' ? 'Hulk က လက်ပြတ်သွားတယ် Iron Man က လက်ပြန်ဆက်ပေးထားတယ်။' : '')
			);
		} else {
			resultText = `ရွေးတာတွေလွန်ကုန်ပြီ။.. တော်လက်တော့..  ၃ ခုပဲရွေးရမှာ..`;
		}

		return (
			<div>
				<p> Total Intel : {total.intelligence}</p>
				<p> Total Strength : {total.strength}</p>
				<p> Total Speed : {total.speed}</p>
				<p> Total : {total.all}</p>

				<Button
					variant="contained"
					color="default"
					onClick={() => {
						this.handleClickOpen();
					}}
				>
					<SendIcon />
					Check
				</Button>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{'Your Result is !'}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">{resultText}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default Total;
