import React,{Component,Fragment} from 'react';

/*importando información de json*/
import articles from '../../assets/information/articles.json'
/* Importando pagina */
import ShopPresenter from '../presenter/ShopPresenter';
/* Llamadas de imagenes */
import article1 from '../../assets/images/shop/article-1.jpg';
import article2 from '../../assets/images/shop/article-2.jpg';
import article3 from '../../assets/images/shop/article-3.jpg';
import article4 from '../../assets/images/shop/article-4.jpg';
import article5 from '../../assets/images/shop/article-5.jpg';
import article6 from '../../assets/images/shop/article-6.jpg';

class ShopContainer extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	articles,
	  	titlePage: "Tienda Virtual"
	  };
	}

	render() {
		return (
			<Fragment>
				<ShopPresenter 
					titlePage={this.state.titlePage}
					articles={this.state.articles}
				/>
			</Fragment>
		);
	}
}
export default ShopContainer;