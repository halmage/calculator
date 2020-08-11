import React,{Fragment,Component} from 'react';

/* Importando pagina */
import KanbanPresenter from '../presenter/KanbanPresenter';

/* Importando componentes */
import Header from '../../components/Header';
import FormKanban from '../../components/FormKanban';
import ListKanban from '../../components/ListKanban';


class KanbanContainer extends Component{
	render() {
		const {onChange,onClick,data,info} = this.props;

		return (
			<Fragment>
				<Header/>
					<section class="container mt-5">
						<div className="row ml-5">
							<div className="col-md-4">
								<FormKanban
									onChange = {onChange}
									onClick = {onClick}
									data	 = {data}	
								/>
							</div>					
							<div className="col-md-8">
								<div className="row">
									<ListKanban info = {info}/>									
								</div>
							</div>

						</div>
					</section>
			</Fragment>
		);
	}
}

export default KanbanContainer;