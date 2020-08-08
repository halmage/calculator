import React,{Fragment,Component} from 'react';

/* importando estilos */
import '../assets/styles/componentes/FormProfile.css';

class FormProfile extends Component{
	render() {
		const {data,onSubmit,onChange} = this.props;
		return (
			<Fragment>
				<form onSubmit={onSubmit}>
					
					<div className="form-group">
						<label className="label-style" for="avatar">Ingrese avatar</label>
						<input type="text" className="form-control input-style" name="avatar" id="avatar" value={data.avatar} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label className="label-style" for="identify">Ingrese cedula</label>
						<input type="text" className="form-control input-style" name="identify" id="identify" value={data.identify} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label className="label-style" for="name">Ingrese nombre</label>
						<input type="text" className="form-control input-style" name="name" id="name" value={data.name} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label className="label-style" for="last_name">Ingrese apellido</label>
						<input type="text" className="form-control input-style" name="last_name" id="last_name" value={data.last_name} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label className="label-style" for="city">Ingrese ciudad</label>
						<input type="text" className="form-control input-style" name="city" id="city" value={data.city} onChange={onChange}/>
					</div>
					<div className="form-group">
						<label className="label-style" for="work">Ingrese trabajo</label>
						<select className="form-control" name="work" id="work" onChange={onChange}>
							<option value="ingeniero">ingeniero</option>
							<option value="informatica">informatica</option>
							<option value="computacion">computación</option>
						</select>
					</div>
					<div className="form-group">
						<label className="label-style" for="content">Ingrese contenido</label>
						<textarea className="form-control" name="content" id="content" value={data.content} onChange={onChange}>
						</textarea>
					</div>
					<button type="submit" className="btn btn-block btn-primary btn-style">Submit</button>
				</form>
			</Fragment>
		);
	}
}

export default FormProfile;