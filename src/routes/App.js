import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/* Llamadas de las paginas */
import HomeContainer       from '../pages/container/HomeContainer';
import CardNewContainer    from '../pages/container/CardNewContainer';
import CalculatorContainer from '../pages/container/CalculatorContainer';


class App extends Component{
	render() {
		return (
			<BrowserRouter>
				<Switch>				
					<Route exact path="/" component={HomeContainer}/>
					<Route exact path="/crear-card" component={CardNewContainer}/>
					<Route exact path="/calculadora" component={CalculatorContainer}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;