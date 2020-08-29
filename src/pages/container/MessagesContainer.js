import React,{Component} from 'react';
/* Importando pagina */
import MessagesPresenter from '../presenter/MessagesPresenter';
/* Importando información de json */
import messagesInformation from '../../assets/information/messagesInformation.json';
class MessagesContainer extends Component{
	constructor(props) {
	  super(props);	
	  this.state = {
            info: messagesInformation,
            titlePage: "Mensajeria",
            messages: []
	  };
	}
	hadlerChange = (e) => {
		this.setState({
				...this.state.data,
				[e.target.name] : e.target.value
		});
	}
	findMessageMe = () =>{
		let userTransmitter = this.state.info.messages.filter(user => {
            let res = this.state.info.messages.find((following) => {
                return user.id !== this.state.me;
            });
            return res === undefined;
        });
        return userTransmitter[0];
	}
	findMessageFrom = () =>{
		let userReceiver = this.state.info.messages.filter(user => {
            let res = this.state.info.messages.find((following) => {
                return user.id !== this.state.from;
            });
            return res === undefined;
        });
        return userReceiver[0];
	}
	hadlerClick = (e) => {		
		e.preventDefault();	
		let userReceiver = this.findMessageFrom();
		let userTransmitter = this.findMessageMe();	
		const newMessage = {
            me: userTransmitter,
            from: userReceiver,
            matter: this.state.matter,
            content: this.state.content
		}		
		const allMessages = [...this.state.messages,newMessage];
		this.setState({		
			messages:allMessages
		})
	}
	render() {
		return (
			<MessagesPresenter 
				info = {this.state.info}
				data = {this.state}
				titlePage = {this.state.titlePage}
				onClick = {this.hadlerClick}
				onChange = {this.hadlerChange}
			/>
		);
	}
}
export default MessagesContainer;