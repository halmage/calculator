import React,{Fragment,Component} from 'react';

/* Llamando componentes */
import CardNewPersenter from '../presenter/CardNewPresenter';

class CardNewContainer extends Component{

	state = {
		data:{
			title: "",
			content: "",
			image: "",
			color: "",
			titlePage:"creacion de card"
		}
	}

	handleClick = (e) => {
		e.preventDefault();
		document.getElementById('miForm')
		console.log(this.state);
	}

	handleChange = (e) => {		
		this.setState({
			data:{
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	}

	render() {
		return (
			<Fragment>
				<CardNewPersenter 
					data = {this.state.data}
					onClick = {this.handleClick}
					onChange = {this.handleChange}
				/>		
			</Fragment>
		);
	}
}

export default CardNewContainer;