import React,{Fragment,Component} from 'react';

/* Importando estilos de css */
import './styles/FormCard.css';

class FormCard extends Component{
	render() {
		const {onSubmit, onChange, data} = this.props;
		return (
			<Fragment>
				<form onSubmit={onSubmit}>
				  <div class="form-group">
				    <label for="title" className="label-style">Ingrese titulo</label>
				    <input type="text" class="form-control input-style" name="title" id="title" value={data.title} onChange={onChange}/>				    
				  </div>
				  <div class="form-group">
				    <label for="content" className="label-style">Ingrese contenido</label>
				    <textarea class="form-control input-style" name="content" id="content" value={data.content} onChange={onChange}>	
					</textarea>
				    {
				    // <input type="text" />
					}
				  </div>
				  <div class="form-group">
				    <label for="image" className="label-style">Ingrese imagen</label>
				    <input type="text" class="form-control input-style" name="image" id="image" value={data.image} onChange={onChange}/>
				  </div>
				  <div class="form-group">
				    <label for="color" className="label-style">Ingrese color</label>
				    <input type="text" class="form-control input-style" name="color" id="color" value={data.color} onChange={onChange}/>
				  </div>				  
				  <button type="submit" class="btn btn-block btn-primary btn-style">Submit</button>
				</form>
			</Fragment>
		);
	}
}

export default FormCard;