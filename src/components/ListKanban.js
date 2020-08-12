import React,{Fragment,Component} from 'react';
import Kanban from './Kanban';

class ListKanban extends Component{
	render() {
		const {info} = this.props;
		return (
			info.map((inf,i) =>{
				return(
					<Fragment>					
						<div className="col-md-5 mt-3">					
							<Kanban key={i} info={inf}/>
						</div>
					</Fragment>
				)
			})
		);
	}
}
export default ListKanban;