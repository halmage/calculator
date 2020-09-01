import {Link} from 'react-router-dom';
import React,{Fragment,Component} from 'react';
/* Importando estilo de Css */
import '../assets/styles/componentes/Header.css';

class Header extends Component{
	render() {
		return (
			<Fragment>
				<header className="bg-header-style d-flex justify-content-center">
					<nav className="nav">						
						<Link to="/" className="nav-link">Home</Link>
						<Link to="/crear-card" className="nav-link">Crear Card</Link>
						<Link to="/calculadora" className="nav-link">Calculadora</Link>
						<Link to="/mi-perfil" className="nav-link">Mi perfil</Link>
						<Link to="/billetera" className="nav-link">Billetera</Link>
						<Link to="/kanban" className="nav-link">kanban</Link>
						<Link to="/tienda" className="nav-link">Tienda</Link>
						<Link to="/mensajeria" className="nav-link">Mensajeria</Link>
					</nav>
				</header>
			</Fragment>
		);
	}
}
export default Header;