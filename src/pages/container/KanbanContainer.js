import React,{Fragment,Component} from 'react';

/* Importando pagina */
import KanbanPresenter from '../presenter/KanbanPresenter';

class KanbanContainer extends Component{

	state = {
		data:{
			title: "",
			content: "",
			priority: "",
			user: "",
			titlePage:"kanban"
		},

		info: []
	}
	

	handleChange = (e) => {		
		this.setState({
			data:{
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({
	            data: {		                
						title: this.state.data.title,
						content: this.state.data.content,
						priority: this.state.data.priority,
						user: this.state.data.image,	
						titlePage:"creacion de card"					  
	        		}
			});

		this.state.info.push(this.state.data);
		document.getElementById('miForm').reset();
		
	}

	render() {
		return (
			<Fragment>
				<KanbanPresenter
					data = {this.state.data}
					onClick = {this.handleClick}
					onChange = {this.handleChange}
					info = {this.state.info}
				/>
			</Fragment>
		);
	}
}

export default KanbanContainer;