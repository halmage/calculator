import {Link} from 'react-router-dom';
import React,{Fragment,Component} from 'react';
/* Importando estilo de Css */
import '../assets/styles/componentes/Header.css';

class Header extends Component{
	render() {
		return (
			<Fragment>
				<header className="bg-header-style">				
					<nav class="nav">						
						<Link to="/" class="nav-link">Home</Link>
						<Link to="/crear-card" class="nav-link">Crear Card</Link>
						<Link to="/calculadora" class="nav-link">Calculadora</Link>
						<Link to="/mi-perfil" class="nav-link">Mi perfil</Link>
						<Link to="/billetera" class="nav-link">Billetera</Link>
						<Link to="/kanban" class="nav-link">kanban</Link>
						<Link to="/tienda" class="nav-link">Tienda</Link>
						<Link to="/mensajeria" class="nav-link">Mensajeria</Link>
					</nav>
				</header>
			</Fragment>
		);
	}
}
export default Header;