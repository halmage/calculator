import React,{Fragment,Component} from 'react';

/* Importando pagina */
import KanbanPresenter from '../presenter/KanbanPresenter';

class KanbanContainer extends Component{
	render() {
		return (
			<Fragment>
				<KanbanPresenter/>
			</Fragment>
		);
	}
}

export default KanbanContainer;