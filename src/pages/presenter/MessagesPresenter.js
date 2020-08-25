import React,{Component,Fragment} from 'react';
/* Importando componentes */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TitlePage from '../../components/TitlePage';
import FormMessages from '../../components/FormMessages';
/* Importando estilos de la pagina */
import '../../assets/styles/pages/MessagesPresenter.css';
class MessagesPresenter extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<Header/>
				<section className="container mt-5">
					<div className="row">
						<div className="col-md-4">
							<div class="card">
							  <div className="card-title">
							  	<TitlePage data={data}/>
							  </div>
							  <div class="card-body">
							    <FormMessages/>
							  </div>
							</div>
						</div>
						<div className="col-md-8">
						</div>
					</div>
				</section>
				<div className="messages-footer">
					<Footer/>
				</div>
			</Fragment>
		);
	}
}
export default MessagesPresenter;