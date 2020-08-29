import React,{Component,Fragment} from 'react';
/* Importando componentes */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TitlePage from '../../components/TitlePage';
import FormMessages from '../../components/FormMessages';
import ListUsersMessage from '../../components/ListUsersMessages'
/* Importando estilos de la pagina */
import '../../assets/styles/pages/MessagesPresenter.css';
class MessagesPresenter extends Component{
	render() {
		const {data,info,titlePage,onClick,onChange} = this.props;
		return (
			<Fragment>
				<Header/>
				<section className="container mt-5">
					<div className="row">
						<div className="col-md-4">
							<div class="card">
							  <div className="card-title">
							  	<TitlePage data={titlePage}/>
							  </div>
							  <div class="card-body">
							    <FormMessages 
							    	data={data}
							    	info={info}
							    	onClick={onClick}
							    	onChange={onChange}							    	
							    />
							  </div>
							</div>
						</div>
						<div className="col-md-8">
							<div class="card">
							  <div className="card-title">
							  	<TitlePage data="recepcion de mensajes"/>
							  </div>
							  <div class="card-body">
							  <ListUsersMessage data={data}/>
							  </div>
							</div>
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