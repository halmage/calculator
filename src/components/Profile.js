import React,{Fragment,Component} from 'react';

/* Importación de estilo de css */
import '../assets/styles/componentes/Profile.css';

class Profile extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<div className="row">

					<div className="col-md-12">
						<figure className=" text-center">
							<img src= {data.avatar}
								 className="img-thumbnail img-avatar-style"
								 title="avatar" 
								 alt="avatar"
							/>
							<figcaption className="mt-2">
								C.I: {data.identify}
							</figcaption>
						</figure>
					</div>
				</div>

				<div className="row ml-3">
				 	<div className="col-md-6">
				 		<p className="text-uppercase">
				 			nombre: {data.name}
				 		</p>
				 		<p className="text-uppercase">
				 			ciudad: {data.city}
				 		</p>
				 	</div>
				 	<div className="col-md-6">
				 		<p className="text-uppercase">apellido: {data.last_name}</p>
				 		<p className="text-uppercase">trabajo: {data.work}</p>				 		
				 	</div>
				</div>

				<div className="row Container ml-2">
					<div className="col-md-12">
						<p className="text-uppercase text-justify">
							Contenido: {data.content}
										
						</p>
					</div>
				</div>

			</Fragment>
		);
	}
}
export default Profile;