import React,{Fragment,Component} from 'react';

/* Importacion de componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TitlePage from '../../components/TitlePage';
import TableOperation from '../../components/TableOperation';
import FormCalculator from '../../components/FormCalculator';

/* Importación de estilos de css */
import '../../assets/styles/pages/CalculatorPresenter.css';

class CalculatorPresenter extends Component{
	render() {
		const {onClick, onChange, data} = this.props;

		return (			
			<Fragment>	
				<Header/>
				<section className="container container-calculator mt-5">					
					<div class="card">
					  <div class="card-title">
					  		<TitlePage data = {data}/>
					  </div>
					  <div class="card-body">
							<div className="row">
								<div class="col-md-12 col-lg-6">
									<TableOperation data = {data} /> 
								</div>
								<div class="col-md-12 col-lg-6">
									<FormCalculator onClick = {onClick} onChange = {onChange} data = {data} /> 
								</div>
							</div>
					  </div>
					</div>					
				</section>				
				<Footer/>
			</Fragment>	
		);
	}
}

export default CalculatorPresenter;