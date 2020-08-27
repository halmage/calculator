import React,{Component,Fragment} from 'react';
/* Importando componentes */
import ListUserMessages from './ListUserMessages';
/* Importando estilos de css */
import '../assets/styles/componentes/FormMessages.css';
class FormMessages extends Component{	
	render() {
		const {data,info,onClick,onChange} = this.props;
		return (
			<Fragment>
				<form>
				   <div class="form-group">
				    <label for="me" className="form-messages-label">Yo:</label>
				    <select class="form-control text-uppercase form-messages-input" id="me" name="me" onChange={onChange}>
				      <option value="">-- ¿Quien eres? --</option>
				      <ListUserMessages info={info}/>
				     </select>
				  </div>
				  <div class="form-group">
				    <label for="exampleFormControlSelect1">Para:</label>
				    <select class="form-control text-uppercase form-messages-input" id="from" name="from" onChange={onChange}>
				      <option value="">-- ¿para quien es el mensaje? --</option>
				      <ListUserMessages info={info}/>
				     </select>
				  </div>
				  <div class="form-group">
					  <label for="matter">Asunto:</label>
					  <input type="text" class="form-control form-messages-input" id="matter" name="matter" onChange={onChange}/>
				  </div>
				  <div class="form-group">
						<label for="content">Contenido:</label>
						<textarea class="form-control form-messages-input" id="content" name="content" onChange={onChange} rows="3"></textarea>
				  </div>
				  <div className="form-group">
				  	  <button type="submit" class="btn btn-block form-messages-btn text-uppercase" onClick={onClick}>enviar</button>
				  </div>
				</form>
			</Fragment>
		);
	}
}
export default FormMessages;