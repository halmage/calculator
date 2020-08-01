import React,{Fragment,Component} from 'react';

/* Importando componentes */
import TitlePage from '../../components/TitlePage';
import FormProfile from '../../components/FormProfile';

class MyProfilePresenter extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<section className="container mt-5">
					<div className="card">
						<div className="card-title">
							<TitlePage data={data}/>
						</div>
						<div className="card-body">
							<div className="row">				
								<div className="col-md-6"></div>
								<div className="col-md-6">
									<FormProfile/>
								</div>				
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

export default MyProfilePresenter;