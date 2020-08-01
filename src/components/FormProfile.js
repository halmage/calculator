import React,{Fragment,Component} from 'react';

/* importando estilos */
import './styles/FormProfile.css';

class FormProfile extends Component{
	render() {
		return (
			<Fragment>
				<form>
					<div class="form-group">
						<label className="label-style" for="identify">Ingrese cedula</label>
						<input type="text" class="form-control input-style" name="identify" id="identify"/>
					</div>
					<div class="form-group">
						<label className="label-style" for="name">Ingrese nombre</label>
						<input type="text" class="form-control input-style" name="name" id="name"/>
					</div>
					<div class="form-group">
						<label className="label-style" for="last_name">Ingrese apellido</label>
						<input type="text" class="form-control input-style" name="last_name" id="last_name"/>
					</div>
					<div class="form-group">
						<label className="label-style" for="city">Ingrese ciudad</label>
						<input type="text" class="form-control input-style" name="city" id="city"/>
					</div>
					<div class="form-group">
						<label className="label-style" for="image">Ingrese ciudad</label>
						<input type="text" class="form-control input-style" name="image" id="image"/>
					</div>
					<button type="submit" class="btn btn-block btn-primary btn-style">Submit</button>
				</form>
			</Fragment>
		);
	}
}

export default FormProfile;