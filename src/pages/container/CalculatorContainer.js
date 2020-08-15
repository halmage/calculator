import React,{Fragment,Component} from 'react';
/* Importar componentes */
import CalculatorPresenter from '../presenter/CalculatorPresenter';

class CalculatorContainer extends Component{	  	
	constructor(props) {
	  super(props);	
	  this.state = {
	        data: {
	            operation: "",
	            num1: "",
	            num2: "",
	            result: "",
	            color: "",
	            titlePage: "Calculadora Actualizada"
	        }
	    }	
	}
	handleChange = (e) => {
		this.setState({
			data:{
				...this.state.data,
				[e.target.name] : e.target.value
			}		
		});
	}
	sumaOperation = () => {
		this.setState({
            data: {
                num1: this.state.data.num1,
                num2: this.state.data.num2,
                operation: this.state.data.operation,
                color: "green",
                titlePage: "Calculadora Actualizada",
                result: parseFloat(this.state.data.num1) + parseFloat(this.state.data.num2)
            }
		});
	}
	restaOperation = () => {
        this.setState({
            data: {
                num1: this.state.data.num1,
                num2: this.state.data.num2,
                operation: this.state.data.operation,
                color: "red",
                titlePage: "Calculadora Actualizada",
                result: parseFloat(this.state.data.num1) - parseFloat(this.state.data.num2)
            }
        });
	}
	multiplicacionOperation = () => {
        this.setState({
            data: {
                num1: this.state.data.num1,
                num2: this.state.data.num2,
                operation: this.state.data.operation,
                color: "yellow",
                titlePage: "Calculadora Actualizada",
                result: parseFloat(this.state.data.num1) * parseFloat(this.state.data.num2)
            }
        });
	}
	divisionOperation = () => {
        if (this.state.data.num2 == 0) {
            alert("Esta operacion no puede ser realizada");
        }

        this.setState({
            data: {
                num1: this.state.data.num1,
                num2: this.state.data.num2,
                operation: this.state.data.operation,
                color: "purple",
                titlePage: "Calculadora Actualizada",
                result: parseFloat(this.state.data.num1) / parseFloat(this.state.data.num2)
            }
        });
	}
	handleClick = (e) => {
		e.preventDefault();
		switch (this.state.data.operation) {
			case '+':
				this.sumaOperation();
				break;
			case '-':
				this.restaOperation();
				break;

			case '*':
				this.multiplicacionOperation();		
				break;

			case '/':
				this.divisionOperation();
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
					onClick = {this.handleClick}
					onChange = {this.handleChange}
					data = {this.state.data}
				/>
			</Fragment>
		);
	}
}
export default CalculatorContainer;