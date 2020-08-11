import React,{Fragment,Component} from 'react';

/* Importando estilos de css */
import '../assets/styles/componentes/FormCard.css';

class FormKanban extends Component{
	render() {
		const {onClick, onChange, data} = this.props;
		return (
			<Fragment>			
					<form id="miForm">
					  <div class="form-group">
					    <label for="title" className="label-style">Ingrese titulo</label>
					    <input type="text" class="form-control input-style" name="title" id="title" value={data.title} onChange={onChange}/>				    
					  </div>
					  <div class="form-group">
					    <label for="content" className="label-style">Ingrese contenido</label>
					    <textarea class="form-control input-style" name="content" id="content" value={data.content} onChange={onChange}>	
						</textarea>
					  </div>
					  <div class="form-group">
					    <label for="priority" className="label-style">Ingrese dificultad</label>
					    <select className="form-control" name="priority" id="priority" onChange={onChange}>
					    	<option value="">-- seleccione una opción --</option>
					    	<option value="bajo">Bajo</option>
					    	<option value="medio">Medio</option>
					    	<option value="alto">Alto</option>
					    </select>
					  </div>
					  <div class="form-group">
					    <label for="user" className="label-style">Ingrese a quien va dirigido</label>
					    <input type="text" class="form-control input-style" name="user" id="user" value={data.user} onChange={onChange}/>
					  </div>				  
					  <button type="submit" class="btn btn-block btn-primary btn-style" onClick={onClick}>Submit</button>

					</form>
			</Fragment>
		);
	}
}

export default FormKanban;