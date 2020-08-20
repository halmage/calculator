import React,{Fragment,Component} from 'react';
/* Llamando estilo del componente */
import '../assets/styles/componentes/Card.css';

class ShopCard extends Component{
	render() {
		const {info,onClick} = this.props;		
		return (
			<Fragment>
				<div className="card" style={{width: "18rem", background:`${info.color}`}}>
					<img src={info.image} className="card-img-top card-image-style" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{info.title}</h5>
						<p className="card-text">{info.content}</p>
					</div>			
					<div className="card-footer">
						<button class="btn btn-block btn-outline-secondary" type="button" onClick={onClick.bind(this,info.id)}>
							<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
							</svg>
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default ShopCard;