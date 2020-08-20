import React,{Component,Fragment} from 'react';
/* Importando información de json */
import shopInformations from '../../assets/information/shopInformations.json'
/* Importando pagina */
import ShopPresenter from '../presenter/ShopPresenter';

class ShopContainer extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	info:shopInformations,
	  	titlePage: "Tienda Virtual",
	  	cant:[]
	  };
	  this.handlerClick = this.handlerClick.bind(this);
	}

	handlerClick = (id) =>{		
		this.state.cant.push(id);	
        let articles = this.state.info.shop.filter(article => {
            let res = this.state.info.shop.find((following) => {
                return article.id != id;
            });
            return res == undefined;
        });
        console.log(articles);
	}

	render() {
		return (
			<Fragment>
				<ShopPresenter 
					titlePage={this.state.titlePage}
					info={this.state.info}
					onClick ={this.handlerClick}
				/>
			</Fragment>
		);
	}
}
export default ShopContainer;