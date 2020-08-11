import React,{Fragment,Component} from 'react';
import '../assets/styles/componentes/Card.css';

class Card extends Component{
	render() {
		const {info} = this.props;		
		return (
			<Fragment>
				<div className="card" style={{width: "18rem", background:`${info.color}`}}>
					<img src={info.image} className="card-img-top card-image-style" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{info.title}</h5>
						<p className="card-text">{info.content}</p>
					</div>					
				</div>
			</Fragment>
		);
	}
}

export default Card;