import React,{Fragment,Component} from 'react';

/* Importar componentes */
import CalculatorPresenter from '../presenter/CalculatorPresenter';

class CalculatorContainer extends Component{

	state = {
		data:{
			operation: "",
			num1: "",
			num2: "",
			result: "",
			color:"",
			titlePage:"Calculadora Actualizada"
		}
	}

	HandleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	HandleChange = (e) => {
		this.setState({
			data:{
				...this.state.data,
				result: this.algebra,
				[e.target.name] : e.target.value
			}		
		});

	}

	HandleClick = (e) =>{
		e.preventDefault();
		this.Algebra();
	}


	Algebra = () => {
		switch (this.state.data.operation) {

			case '+':

				this.setState({
					data:{
						num1:this.state.data.num1,
						num2:this.state.data.num2,
						operation:this.state.data.operation,
						color:"green",
						titlePage:"Calculadora Actualizada",
						result : parseFloat(this.state.data.num1) + parseFloat(this.state.data.num2)
					}
				});

				break;

			case '-':
				this.setState({
					data:{
						num1:this.state.data.num1,
						num2:this.state.data.num2,
						operation:this.state.data.operation,
						color:"red",
						titlePage:"Calculadora Actualizada",
						result : parseFloat(this.state.data.num1) - parseFloat(this.state.data.num2)
					}
				});
				break;

			case '*':

				this.setState({
					data:{
						num1:this.state.data.num1,
						num2:this.state.data.num2,
						operation:this.state.data.operation,
						color:"yellow",
						titlePage:"Calculadora Actualizada",
						result : parseFloat(this.state.data.num1) * parseFloat(this.state.data.num2)
					}
				});

				break;

			case '/':

				if(this.state.data.num2 == 0){
					alert("Esta operacion no puede ser realizada");					
				}

	            this.setState({
	                data: {
	                    num1: this.state.data.num1,
	                    num2: this.state.data.num2,
	                    operation: this.state.data.operation,
	                    color: "purple",
	                    titlePage:"Calculadora Actualizada",
	                    result: parseFloat(this.state.data.num1) / parseFloat(this.state.data.num2)
	                }
	            });				

				break;

			default:

				alert("No ha sido seleccionada ninguna operación");

				break;
		}
	}

	render() {
		return (
			<Fragment>
				<CalculatorPresenter
					onChange = {this.HandleChange}
					onClick = {this.HandleClick}
					data = {this.state.data}
				/>
			</Fragment>
		);
	}
}

export default CalculatorContainer;