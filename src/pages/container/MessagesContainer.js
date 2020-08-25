import React,{Component,Fragment} from 'react';
/*Importando pagina*/
import MessagesPresenter from '../presenter/MessagesPresenter';
class MessagesContainer extends Component{
	constructor(props) {
	  super(props);	
	  this.state = {
	  	data :{
	  		titlePage: "Mensajeria"
	  	}	  	
	  };
	}
	render() {
		return (
			<MessagesPresenter data = {this.state.data}/>
		);
	}
}
export default MessagesContainer;