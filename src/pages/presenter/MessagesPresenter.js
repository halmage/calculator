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
							  <ul className="list-group">
							  							  	{
							  		
							  			
							  				
							  										  		
							  		data.messages.map((message,i)=>{	
							  			return(
							  				<Fragment>							  <li key={i} class="list-group-item mt-1">	
											  	<div className="row">
											  		<div className="col-md-4">
											  			<img src={message.me.image} className="mb-2" width="50" height="50" style={{borderRadius:"30px", padding:"5px",background:"blue"}}/> 
											  			<span className="text-capitalize"> 			{message.me.name} {message.me.lost_name} 
											  			</span>	
											  			<br/>
											  			<img src={message.from.image} width="50" height="50" style={{borderRadius:"30px", padding:"5px",background:"red"}}/> 
											  			<span className="text-capitalize"> {message.from.name} {message.from.lost_name} 
											  			</span>	
											  		</div>								    
											  		<div className="col-md-8">
											  			<p>Asunto: {message.matter}</p>
											  			<p>
											  				{message.content}
											  			</p>
											  		</div>
												</div>
										</li>
										</Fragment>
									)})
									
								}
								</ul>
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