import React,{Component,Fragment} from 'react';
/*importando información de json*/
import homeInformations from '../../assets/information/homeInformations.json'
/* Llamando componentes */
import HomePresenter from '../presenter/HomePresenter';

class HomeContainer extends Component{
	constructor(props) {
	  super(props);	
	  this.state = {
				info:homeInformations,
				titlePage:"Enciclopedia"
			};
	}
	render() {
		return (
			<Fragment>
				<HomePresenter 
					info={this.state.info} 
					titlePage={this.state.titlePage}
				/>
			</Fragment>
		);
	}
}
export default HomeContainer;
