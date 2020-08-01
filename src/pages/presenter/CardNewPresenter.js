import React,{Fragment,Component} from 'react';

/* Llamando componentes */
import Card     from '../../components/Card';
import Header   from '../../components/Header';
import FormCard from '../../components/FormCard';
import TitlePage from '../../components/TitlePage';

class CardNewPresenter extends Component{

	render() {
		const {onChange,onSubmit,data} = this.props;
		return (
			<Fragment>
				<Header/>	
					<div className="container mt-5">
						<div class="card">
							<div className="card-title">
								<TitlePage data={data}/>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-6">
										<Card info={data}/>
									</div>
									<div class="col-md-6">
										<FormCard
											onChange = {onChange}
											onSubmit = {onSubmit}
											data = {data}
										/>					
									</div>
								</div>	
							</div>
						</div>											
					</div>
			</Fragment>
		);
	}
}

export default CardNewPresenter;