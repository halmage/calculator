import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
/* Llamadas de las paginas */
import HomeContainer from '../pages/container/HomeContainer';
import ShopContainer from '../pages/container/ShopContainer';
import KanbanContainer from '../pages/container/KanbanContainer';
import WalletContainer from '../pages/container/WalletContainer';
import CardNewContainer from '../pages/container/CardNewContainer';
import MyProfileContainer from '../pages/container/MyProfileContainer';
import CalculatorContainer from '../pages/container/CalculatorContainer';

class App extends Component{
	render() {
		return (
			<BrowserRouter>
				<Switch>				
					<Route exact path="/" component={HomeContainer}/>
					<Route exact path="/tienda" component={ShopContainer}/>
					<Route exact path="/Kanban" component={KanbanContainer}/>
					<Route exact path="/billetera" component={WalletContainer}/>
					<Route exact path="/crear-card" component={CardNewContainer}/>
					<Route exact path="/mi-perfil" component={MyProfileContainer}/>
					<Route exact path="/calculadora" component={CalculatorContainer}/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;