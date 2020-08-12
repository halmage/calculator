import React,{Fragment,Component} from 'react';

/* Importando estilos css */
import '../../assets/styles/pages/WalletPresenter.css';

/* Importando componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FormWallet from '../../components/FormWallet';
import MoneyWallet from '../../components/MoneyWallet';
import TableInformationWallet from '../../components/TableInformationWallet';
import TitlePage from '../../components/TitlePage';

class WalletPresenter extends Component{
	render() {
		const {data, info, onChange, onClick} = this.props;
		return (
			<Fragment>
				<Header/>
					<section className="container mt-5 wallet-container">	
						<div className="card">
							<div className="card-title">
								<TitlePage data={data}/>
							</div>
								<div className="card-body">
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
								</div>
						</div>
					</section>
				<Footer/>
			</Fragment>

		);
	}
}
export default WalletPresenter;