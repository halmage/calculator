import React,{Fragment,Component} from 'react';

/* Importando componente */
import WalletPresenter from '../presenter/WalletPresenter';

class WalletContainer extends Component{
	constructor(props) {
	  super(props);	
	  this.global ={
			varibles:{
				vdate: new Date()
			}
		}
		this.state = {
			data:{
				id: 1,
				wallet:0,
				description:"",
				money:"",
				date: `
					    ${this.global.varibles.vdate.getHours()}:${this.global.varibles.vdate.getMinutes()}:${this.global.varibles.vdate.getSeconds()}
					    ${this.global.varibles.vdate.getDate()}/${this.global.varibles.vdate.getMonth()}/${this.global.varibles.vdate.getFullYear()}
					  `
				,titlePage:"billetera digital"
			},
			info: []
		}
	}
	handlerClick = (e) => {
		e.preventDefault();
		let date = new Date();
		let money = document.getElementById('money').value;
		let description = document.getElementById('description').value;

		if((description.length > 0)&& (money.length > 0)){
       		this.setState({
	            data: {
		                id: this.state.data.id + 1,
		                wallet: parseFloat(this.state.data.wallet) + parseFloat(this.state.data.money),
		                date: `
						    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
						    ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}						    
						  `
						,titlePage:"billetera digital"
	        		}
			});

				this.state.info.push(this.state.data);
				document.getElementById('miForm').reset();
		}else {
				alert("Todos los campos son obligatorios");
		}
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
					info = {this.state.info}
					onChange = {this.handlerChange}
					onClick  = {this.handlerClick}
				/>
			</Fragment>
		);
	}
}
export default WalletContainer;
