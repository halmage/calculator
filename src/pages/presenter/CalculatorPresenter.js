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
				<section className="container mt-5">					
					<div className="card">
					  <div className="card-title">
					  		<TitlePage data = {data}/>
					  </div>
					  <div className="card-body">
							<div className="row">
								<div className="col-md-12 col-lg-6">
									<TableOperation data = {data} /> 
								</div>
								<div className="col-md-12 col-lg-6">
									<FormCalculator onClick = {onClick} onChange = {onChange} data = {data} /> 
								</div>
							</div>
					  </div>
					</div>					
				</section>	
				<div className="calculator-footer">				
					<Footer/>
				</div>
			</Fragment>	
		);
	}
}
export default CalculatorPresenter;