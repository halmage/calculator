import React,{Component,Fragment} from 'react';
/* Importando componentes */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListShop from '../../components/ListShop';
import TitlePage from '../../components/TitlePage';
import ListShopTrolley from '../../components/ListShopTrolley';
/* Importando estilos de css */
import '../../assets/styles/pages/ShopPresenter.css';

class ShopPresenter extends Component{
	render() {
		const  {titlePage,info,items,onClick,onClickDelete} = this.props;	
		return (
			<Fragment>
				<Header/>
				<section className="container mt-5">
					<div className="row">
						<div className="col-md-8">
							<div className="card">
								<div className="card-title">
									<TitlePage data={titlePage}/>
								</div>
								<div className="card-body">
									<div className="row container">
										<ListShop info ={info}
												  onClick={onClick}
										/>
									</div>
								</div>
							</div>                                                       
						</div>
						<div className="col-md-4">									
							<ul class="list-group">
								<li class="list-group-item list-style text-center text-uppercase">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
									</svg>  
									<br/>
									carrito 
									<br/>
									<span>{items.length > 0 ? items.length : ""}</span>
								</li>
								<ListShopTrolley 
								         items = {items}
								         onClickDelete = {onClickDelete}
								/>
							</ul>
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}
export default ShopPresenter;