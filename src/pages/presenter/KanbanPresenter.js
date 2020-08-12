import React,{Fragment,Component} from 'react';
/* Importando pagina */
import KanbanPresenter from '../presenter/KanbanPresenter';
/* Importando componentes */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormKanban from '../../components/FormKanban';
import ListKanban from '../../components/ListKanban';
import TitlePage from '../../components/TitlePage';

/* Estilos de css */
import '../../assets/styles/pages/KanbanPresenter.css';

class KanbanContainer extends Component{
	render() {
		const {onChange,onClick,onClickDelete,data,info} = this.props;
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
											<ListKanban 
												info = {info}
												onClickDelete = {onClickDelete}
											/>																				
										</div>
									</div>

								</div>
							</div>
						</div>
					</section>
					<div className="kanban-footer">					
						<Footer/>
					</div>
			</Fragment>
		);
	}
}
export default KanbanContainer;