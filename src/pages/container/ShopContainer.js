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
	  	items:[],
	  	total:0	  	
	  };
	}

	findArticle = (id) =>{
		return this.state.info.shop.filter(article => {
            let res = this.state.info.shop.find((following) => {
                return article.id !== id;
            });
            return res === undefined;
        });
	}

	handlerClick = (id) => {	               
		let articles = this.state.info.shop.filter(article => {
            let res = this.state.info.shop.find((following) => {
                return article.id !== id;
            });
            return res === undefined;
        });
        this.setState({
        	items:[...this.state.items,Object.assign({}, articles[0])],
        	total: this.state.total + parseFloat(articles[0].price)
        });   
        console.log(articles[0].price);     
	}
	handlerClickDelete = (id,item) =>{
		this.setState({		
			items:this.state.items.filter((e,i)=>{
				if(this.state.items.length === 1){					
					i = id
					return i !== id
				}
				return i !== id
			}),
			total: this.state.total - parseFloat(item.price)
		});
	}
	render() {
		return (
			<Fragment>
				<ShopPresenter 
					info = {this.state.info}
					items = {this.state.items}
					total = {this.state.total}
					onClick = {this.handlerClick}
					titlePage = {this.state.titlePage}
					onClickDelete = {this.handlerClickDelete}
				/>
			</Fragment>
		);
	}
}
export default ShopContainer;