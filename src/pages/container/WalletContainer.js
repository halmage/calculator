import React,{Fragment,Component} from 'react';

/* Importando componente */
import WalletPresenter from '../presenter/WalletPresenter';

class WalletContainer extends Component{

	state = {
			data:{
				id: 0,
				wallet:0,
				description:"",
				money:""
			}
		}

	handlerClick = (e) => {
		e.preventDefault();
		this.setState({
			data:{
				id: this.state.data.id + 1,
				wallet: this.state.data.wallet + parseFloat( this.state.data.money)
			}
		});

		document.getElementById('miForm').reset();

		let element = document.createElement('tr');
		let content = document.createTextNode(`${this.state.data.wallet} $`);
		element.appendChild(content);

		let padre = document.getElementById("table");
		let hijo  = document.getElementsByTagName("tr")[0];
		padre.appendChild(element);		
	}

	handlerChange = (e) =>{
		this.setState({
			data:{				
				...this.state.data,
				[e.target.name] : e.target.value
			}
		})
	}

	render() {
		return (
			<Fragment>
				<WalletPresenter
					data = {this.state.data}
					onChange = {this.handlerChange}
					onClick  = {this.handlerClick}
				/>
			</Fragment>
		);
	}
}

export default WalletContainer;