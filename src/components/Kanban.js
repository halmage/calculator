import React,{Fragment,Component} from 'react';
import '../assets/styles/componentes/Card.css';

class Kanban extends Component{
	render() {
		const {info} = this.props;		
		return (
			<Fragment>
				<div className="card" style={{width: "18rem"}}>
					<div className="card-header">
						<div className="card-title">
							<h3 className="text-center">{info.title}</h3>
							<h6 className="text-center"><span class="badge badge-secondary text-center">{info.priority}</span></h6>
						</div>
					</div>

					<div className="card-body">
						<p className="card-text text-center">{info.content}</p>
						<p className="text-center h3">{info.user}</p>
					</div>
					<div className="card-footer">

						<button className="btn btn-block btn-danger">Eliminar</button>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Kanban;