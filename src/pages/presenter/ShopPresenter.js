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
		const  {titlePage,info,items,total,onClick,onClickDelete} = this.props;	
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
							<ul className="list-group">
								<li className="list-group-item container list-style text-center text-uppercase">
									<div className="row">
										<div className="col-md-5 mr-3">
											<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart ml-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
											</svg>
											<br/>
											<span className="ml-5">{items.length > 0 ? items.length : 0}</span>											
										</div>			
										<div className="col-md-3">											
											<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cash-stack ml-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
												<path fill-rule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
												<path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
											</svg>
											<br/>
											<span className={total === 0 ? "ml-5" : "ml-3"}>{items.length > 0 ? `${total}$` : `${total}$`}</span>
										</div>
									</div>
								</li>
								<ListShopTrolley 
								         items = {items}
								         onClickDelete = {onClickDelete}
								/>
							</ul>
						</div>
					</div>
				</section>
				<div className="shop-footer">
					<Footer/>
				</div>
			</Fragment>
		)
	}
}
export default ShopPresenter;