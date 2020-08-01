import {Link} from 'react-router-dom';
import React,{Fragment, Component} from 'react';

/* Llamado de estilo de css */
import './styles/Footer.css';

/* Importando imagenes */
import Logo from '../images/logo/crearlogogratis_1024x1024_01.png';

class Footer extends Component{
	render() {
		return (
			<Fragment>
				<footer className="navbar-nav fixed-bottom footer-style">
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
										<Link to="/" className="nav-link">Home</Link>
									<li className="nav-item">
										<Link to="/crear-card" className="nav-link">Crear Card</Link>
									</li>
									<li className="nav-item">
										<Link to="/calculadora" className="nav-link">Calculadora</Link>
									</li>
									<li className="nav-item">
										<a className="nav-link">Item#1</a>
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