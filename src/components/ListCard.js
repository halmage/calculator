import React,{Fragment,Component} from 'react';
/* Importando componente */
import Card from './Card';

class ListCard extends Component{
	render() {
		const {info} = this.props;
		console.log({info});
		return (
			info.home.map((inf,i) =>{
				return(
					<Fragment>					
						<div className="col-md-6 mt-3">					
							<Card key={i} info={inf}/>
						</div>
					</Fragment>
				)
			})
		);
	}
}
export default ListCard;