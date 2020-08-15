import React,{Component,Fragment} from 'react';
/* Importando componentes */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListShop from '../../components/ListShop';
import TitlePage from '../../components/TitlePage';

class ShopPresenter extends Component{
	render() {
		const  {titlePage,info} = this.props;		
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
									<ListShop info ={info}/>
								</div>
							</div>
						</div>
						<div className="col-md-4">
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}
export default ShopPresenter;