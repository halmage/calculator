import React,{Fragment,Component} from 'react';

class FormWallet extends Component{
	render() {
		const {data,onChange,onClick} = this.props;
		return (
			<Fragment>		
				<section className="offset-2 mt-4">				
					<form id="miForm">
						<div className="form-row align-items-center">
							<div className="col-sm-4 my-1">
								<label className="sr-only" for="inlineFormInputName">Descripción</label>
								<input type="text" 
								       className="form-control" 
								       id="description" 
								       name="description"
								       value = {data.description}
								       onChange={onChange}
								       placeholder="Descripción"/>
							</div>
							<div className="col-sm-4 my-1">
								<label className="sr-only" for="inlineFormInputGroupUsername">Monto</label>
								<div className="input-group">
									<div className="input-group-prepend">
										<div className="input-group-text">$</div>
									</div>
									<input type="text" 
										   className="form-control" 
										   id="money" 
									       name="money"
									       value = {data.money}
									       onChange={onChange} 
										   placeholder="Monto"/>
								</div>
							</div>
							<div className="col-auto my-1">
								<button type="submit" className="btn btn-style" onClick={onClick}>Ingresar</button>
							</div>
						</div>
					</form>		
				</section>
			</Fragment>
		);
	}
}

export default FormWallet;