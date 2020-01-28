import React from 'react';

import PlayerCard from './PlayerCard';

class Players extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:5000/api/players')
			.then(res => res.json())
			.then(res => {
				this.setState({ ...this.state, players: res });
				console.log(this.state.players);
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className='player-list'>
				{this.state.players.map(item => (
					<PlayerCard key={item.id} player={item} />
				))}
			</div>
		);
	}
}

export default Players;
