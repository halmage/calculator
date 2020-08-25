import {Link} from 'react-router-dom';
import React,{Fragment, Component} from 'react';
/* Llamado de estilo de css */
import '../assets/styles/componentes/Footer.css';
/* Importando imagenes */
import Logo from '../assets/images/logo/crearlogogratis_1024x1024_01.png';

class Footer extends Component{
	render() {
		return (
			<Fragment>
				<footer className="navbar-nav footer-style">
					<div className="container">
						<div class="row mt-3 mb-3">
							<div class="col-md-4">							
								<ul className="navbar-nav text-center ml-5">
									<li className="nav-item">
									</li>
										<Link to="/" className="nav-link">Home</Link>
									<li className="nav-item">
										<Link to="/crear-card" className="nav-link">Crear Card</Link>
									</li>
									<li className="nav-item">
										<Link to="/calculadora" className="nav-link">Calculadora</Link>
									</li>
									<li className="nav-item">
										<Link to="/mi-perfil" className="nav-link">Mi Perfil</Link>
									</li>									
								</ul>
							</div>
							<div class="col-md-3">
								<figure>
									<img src={Logo} className="logo-style" alt="logo" title="logo"/>
									<figcaption className="text-uppercase text-center logo-test-style">
									inteligencia artificial
									</figcaption>
								</figure>
							</div>
							<div class="col-md-4">
								<ul className="navbar-nav text-center mr-5">
									<li className="nav-item">
									</li>
										<Link to="/billetera" className="nav-link">Billetera</Link>
									<li className="nav-item">
										<Link to="kanban" class="nav-link">kanban</Link>
									</li>
									<li className="nav-item">
										<Link to="/tienda" className="nav-link">Tienda</Link>
									</li>
									<li className="nav-item">
										<Link to="mensajeria" class="nav-link">Mensajeria</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</Fragment>
		);
	}
}
export default Footer;