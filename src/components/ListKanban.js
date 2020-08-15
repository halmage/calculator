import React,{Fragment,Component} from 'react';
/* Importando componente */
import Kanban from './Kanban';

class ListKanban extends Component{
	render() {
		const {info,onClickDelete} = this.props;
		return (
			info.map((inf,i) =>{
				return(
					<Fragment>					
						<div className="col-md-5 mt-3">					
							<Kanban key={i} 
									id={i} 
									info={inf}
									onClickDelete = {onClickDelete}
							/>
						</div>
					</Fragment>
				)
			})
		);
	}
}
export default ListKanban;