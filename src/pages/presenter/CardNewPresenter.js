import React,{Fragment,Component} from 'react';

/* Llamando componentes */
import Footer from '../../components/Footer';
import Card     from '../../components/Card';
import Header   from '../../components/Header';
import FormCard from '../../components/FormCard';
import TitlePage from '../../components/TitlePage';

/* Llamando estilos de css */
import '../../assets/styles/pages/CardNewPresenter.css';

class CardNewPresenter extends Component{

	render() {
		const {onChange,onClick,data} = this.props;
		return (
			<Fragment>
				<Header/>	
					<section className="container container-card-new mt-5">
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
											onClick = {onClick}
											data = {data}
										/>					
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

export default CardNewPresenter;