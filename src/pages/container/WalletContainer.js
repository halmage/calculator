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
			},
			info: [],
			contador:0
		}

	handlerClick = (e) => {
		e.preventDefault();		

        this.setState({
            data: {
                id: this.state.data.id + 1,
                wallet: this.state.data.wallet + parseFloat(this.state.data.money)                
            }
        }); 

        this.state.info.push(this.state.data);

        console.log(this.state.info);
        document.getElementById('miForm').reset();
			
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