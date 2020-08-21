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
	  	items:[]	  	
	  };
	}

	Com

	handlerClick = (id) => {	
        let articles = this.state.info.shop.filter(article => {
            let res = this.state.info.shop.find((following) => {
                return article.id != id;
            });
            return res == undefined;
        });       
        this.setState({
        	items:[...this.state.items,Object.assign({}, articles[0])]
        });        
	}
	handlerClickDelete = (id) =>{		
		this.setState({		
			items:this.state.items.filter((e,i)=>{
				if(this.state.items.length == 1){					
					i = id
					return i != id
				}
				return i != id
			})
		})
	}
	render() {
		return (
			<Fragment>
				<ShopPresenter 
					info = {this.state.info}
					items = {this.state.items}
					onClick = {this.handlerClick}
					titlePage = {this.state.titlePage}
					onClickDelete = {this.handlerClickDelete}
				/>
			</Fragment>
		);
	}
}
export default ShopContainer;