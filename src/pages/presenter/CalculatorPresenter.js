import React,{Fragment,Component} from 'react';

/* Importacion de componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TitlePage from '../../components/TitlePage';
import TableOperation from '../../components/TableOperation';
import FormCalculator from '../../components/FormCalculator';

class CalculatorPresenter extends Component{
	render() {
		const {onChange, onClick, data} = this.props;
		return (			
			<Fragment>	
				<Header/>
				<section className="container mt-5">					
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
									<FormCalculator onChange = {onChange} onClick = {onClick} data = {data} /> 
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