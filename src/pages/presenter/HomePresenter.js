import React,{Component,Fragment} from 'react';

/* Llamando componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListCard from '../../components/ListCard';
import TitlePage from '../../components/TitlePage';
import Information from '../../components/Information';

/* Importación de estilos de css */
import '../../assets/styles/pages/HomePresenter.css';

class HomePresenter extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  		info: props.info,
	  		titlePage: props.titlePage
	  };
	}

	render() {		
		return (
			<Fragment>
				<Header/>
				<section class="container home-container mt-5">				
					<div className="row">					
						<div className="col-md-5 col-lg-4">						
							<ListCard info={this.state.info}/>
						</div>
						<div className="col-md-7 col-lg-8 my-2">
							<div className="card">
								<TitlePage data={this.state.titlePage}/>
								<div class="card-body">
									<Information/>
								</div>
							</div>
						</div>						
					</div>
				</section>
				<Footer/>
			</Fragment>
		);
	}
}

export default HomePresenter;
