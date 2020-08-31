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
					<section className="container mt-5">
						<div className="card">
							<div className="card-title">
								<TitlePage data={data}/>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-md-6">
										<Card info={data}/>
									</div>
									<div className="col-md-6">
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
				<div className="card-new-footer">
					<Footer/>
				</div>
			</Fragment>
		);
	}
}
export default CardNewPresenter;