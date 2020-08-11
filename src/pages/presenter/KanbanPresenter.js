import React,{Fragment,Component} from 'react';

/* Importando pagina */
import KanbanPresenter from '../presenter/KanbanPresenter';

/* Importando componentes */
import Header from '../../components/Header';
import FormKanban from '../../components/FormKanban';
import ListKanban from '../../components/ListKanban';
import TitlePage from '../../components/TitlePage.js';


class KanbanContainer extends Component{
	render() {
		const {onChange,onClick,data,info} = this.props;

		return (
			<Fragment>
				<Header/>
					<section class="container mt-5">
						<div class="card">
							<div className="card-title">
								<TitlePage data={data}/>
							</div>
							<div class="card-body">
								<div className="row ml-4">
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
							</div>
						</div>
					</section>
			</Fragment>
		);
	}
}

export default KanbanContainer;