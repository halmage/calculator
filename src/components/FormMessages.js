import React,{Component,Fragment} from 'react';
/* Importando componentes */
import ListOptionUserMessages from './ListOptionUserMessages';
/* Importando estilos de css */
import '../assets/styles/componentes/FormMessages.css';
class FormMessages extends Component{	
	render() {
		const {info,onClick,onChange} = this.props;
		return (
			<Fragment>
				<form>
				   <div className="form-group">
				    <label className="form-messages-label">Yo:</label>
				    <select className="form-control text-uppercase form-messages-input" id="me" name="me" onChange={onChange}>
				      <option value="">-- ¿Quien eres? --</option>
				      <ListOptionUserMessages info={info}/>
				     </select>
				  </div>
				  <div className="form-group">
				    <label className="form-messages-label">Para:</label>
				    <select className="form-control text-uppercase form-messages-input" id="from" name="from" onChange={onChange}>
				      <option value="">-- ¿para quien es el mensaje? --</option>
				      <ListOptionUserMessages info={info}/>
				     </select>
				  </div>
				  <div className="form-group">
					  <label className="form-messages-label">Asunto:</label>
					  <input type="text" className="form-control form-messages-input" id="matter" name="matter" onChange={onChange}/>
				  </div>
				  <div className="form-group">
						<label className="form-messages-label">Contenido:</label>
						<textarea className="form-control form-messages-input" id="content" name="content" onChange={onChange} rows="3"></textarea>
				  </div>
				  <div className="form-group">
				  	  <button type="submit" className="btn btn-block form-messages-btn text-uppercase" onClick={onClick}>enviar</button>
				  </div>
				</form>
			</Fragment>
		);
	}
}
export default FormMessages;