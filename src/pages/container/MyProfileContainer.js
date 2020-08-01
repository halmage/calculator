import React,{Fragment,Component} from 'react';

/* Llmando a componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyProfilePresenter from '../presenter/MyProfilePresenter';

class MyProfileContainer extends Component{

	state={
		data:{
			titlePage:"Formulario del perfil"
		}
	}

	render() {
		return (
			<Fragment>
				<Header/>
					<MyProfilePresenter data={this.state.data}/>
				<Footer/>
			</Fragment>
		);
	}
}

export default MyProfileContainer;