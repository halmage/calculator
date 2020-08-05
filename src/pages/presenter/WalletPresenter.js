import React,{Fragment,Component} from 'react';

/* Importando estilos css */
import '../styles/WalletPresenter.css';

/* Importando componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FormWallet from '../../components/FormWallet';
import MoneyWallet from '../../components/MoneyWallet';
import TableInformationWallet from '../../components/TableInformationWallet'

class WalletPresenter extends Component{
	render() {
		const {data, info, onChange, onClick} = this.props;
		return (
			<Fragment>
				<Header/>
					<section className="container mt-5 wallet-container">					
						<MoneyWallet
							data = {data}
						/>	
						<FormWallet
							data = {data}
							onChange = {onChange}
							onClick = {onClick}
						/>		
						<TableInformationWallet
							info = {info}
						/>			
					</section>
				<Footer/>
			</Fragment>

		);
	}

}

export default WalletPresenter;