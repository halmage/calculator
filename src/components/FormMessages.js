import React,{Component,Fragment} from 'react';

class FormMessages extends Component{
	render() {
		return (
			<Fragment>
				<form>
				   <div class="form-group">
				    <label for="exampleFormControlSelect1">Yo:</label>
				    <select class="form-control" id="exampleFormControlSelect1">
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				     </select>
				  </div>
				  <div class="form-group">
				    <label for="exampleFormControlSelect1">Para:</label>
				    <select class="form-control" id="exampleFormControlSelect1">
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				     </select>
				  </div>
				  <div class="form-group">
					  <label for="exampleInputPassword1">Asunto:</label>
					  <input type="text" class="form-control" id="exampleInputPassword1"/>
				  </div>
				</form>
			</Fragment>
		);
	}
}
export default FormMessages;