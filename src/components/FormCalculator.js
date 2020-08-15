import React,{Fragment,Component} from 'react';
/* importando estilos */
import '../assets/styles/componentes/FormCalculator.css';

class FormCalculator extends Component{
	render() {
		const {onChange, onClick, data} = this.props;
		return (
			<Fragment>
				<form id="miForm">
					<div class="form-group">
						<label for="operation" className="label-style">Ingrese una opearción</label>
						<select className="form-control input-style" name="operation" id="operation" value={data.operation} onChange={onChange}>
							<option value="">-- Elija una opearción --</option>
							<option value="+">Suma</option>
							<option value="-">Resta</option>
							<option value="*">Multiplicación</option>
							<option value="/">Division</option>
						</select>
					</div>
					<div class="form-group">
						<label for="num1" className="label-style">Ingrese primer numero</label>
						<input type="text" className="form-control input-style" name="num1" id="num1" value={data.num1} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label for="num2" className="label-style">Ingrese segundo numero</label>
						<input type="text" className="form-control input-style" name="num2" id="num2" value={data.num2} onChange={onChange}/>
					</div>
					<button type="submit" className="btn btn-block btn-primary btn-style text-uppercase" onClick={onClick}>calcular</button>
				</form>
			</Fragment>
		);
	}
}

export default FormCalculator;