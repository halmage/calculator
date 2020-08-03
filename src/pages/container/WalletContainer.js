import React,{Fragment,Component} from 'react';

/* Importando componente */
import WalletPresenter from '../presenter/WalletPresenter';

class WalletContainer extends Component{

	state = {
			data:{
				id: 1,
				wallet:0,
				description:"comida",
				money:300
			}
		}

	render() {
		return (
			<Fragment>
				<WalletPresenter
					data = {this.state.data}
				/>
			</Fragment>
		);
	}
}

export default WalletContainer;