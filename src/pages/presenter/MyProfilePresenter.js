import React,{Fragment,Component} from 'react';
/* Importando componentes */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import TitlePage from '../../components/TitlePage';
import FormProfile from '../../components/FormProfile';
/* Importación de css */
import '../../assets/styles/pages/MyProfilePresenter.css';

class MyProfilePresenter extends Component{
	render() {
		const {data, onChange, onSubmit} = this.props;
		return (
			<Fragment>
				<Header/>
				<section className="container mt-5">
					<div className="card">
						<div className="card-title">
							<TitlePage data={data}/>
						</div>
						<div className="card-body">
							<div className="row">				
								<div className="col-md-6">
									<Profile
										data = {data}
									/>
								</div>
								<div className="col-md-6">
									<FormProfile
										data = {data}
										onChange = {onChange}
										onSubmit = {onSubmit}
									/>
								</div>				
							</div>
						</div>
					</div>
				</section>
				<div className="my-profile-footer">
					<Footer/>
				</div>
			</Fragment>
		);
	}
}
export default MyProfilePresenter;