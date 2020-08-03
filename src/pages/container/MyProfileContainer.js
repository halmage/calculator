import React,{Fragment,Component} from 'react';

/* Llmando a componentes */
import MyProfilePresenter from '../presenter/MyProfilePresenter';

class MyProfileContainer extends Component{

	state={
		data:{
			avatar:"",
			identyfy:"",
			name:"",
			last_name:"",
			city:"",
			work:"",
			content:"",
			titlePage:"Formulario del perfil"
		}
	}

	hadlerSubmit = (e) =>{
		e.preventDefault();
		console.log(this.state);
	}

	hadlerChange = (e) =>{
		this.setState({
			data:{
				...this.state.data,
				[e.target.name] : e.target.value
			}
		});
	}


	render() {
		return (
			<Fragment>
					<MyProfilePresenter 
						data = {this.state.data}
						onChange = {this.hadlerChange}
						onSubmit = {this.hadlerSubmit}
					/>
			</Fragment>
		);
	}
}

export default MyProfileContainer;