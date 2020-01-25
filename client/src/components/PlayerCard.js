import React from 'react';

class PlayerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: {}
		};
	}

	componentDidMount() {
		console.log(this.props.player);
		this.setState({ ...this.state, player: this.props.player });
	}

	render() {
		return (
			<div className='player-card'>
				<h2>{this.state.player.name}</h2>
				<p>{this.state.player.country}</p>
				<p>{this.state.player.searches}</p>
			</div>
		);
	}
}

export default PlayerCard;
