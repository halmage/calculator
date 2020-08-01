import React,{Fragment,Component} from 'react';

/* Importacion de componentes */
import Header from '../../components/Header';
import TableOperation from '../../components/TableOperation';
import FormCalculator from '../../components/FormCalculator';
import TitlePage from '../../components/TitlePage';

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
			</Fragment>	
		);
	}
}

export default CalculatorPresenter;