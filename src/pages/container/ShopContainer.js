import React,{Component,Fragment} from 'react';
/*importando información de json*/
import shopInformations from '../../assets/information/shopInformations.json'
/* Importando pagina */
import ShopPresenter from '../presenter/ShopPresenter';

class ShopContainer extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	info:shopInformations,
	  	titlePage: "Tienda Virtual"
	  };
	}

	render() {
		return (
			<Fragment>
				<ShopPresenter 
					titlePage={this.state.titlePage}
					info={this.state.info}
				/>
			</Fragment>
		);
	}
}
export default ShopContainer;