import React,{Fragment,Component} from 'react';

class FormWallet extends Component{
	render() {
		return (
			<Fragment>		
				<section className="offset-2 mt-4">				
					<form>
						<div className="form-row align-items-center">
							<div className="col-sm-4 my-1">
								<label className="sr-only" for="inlineFormInputName">Name</label>
								<input type="text" className="form-control" id="inlineFormInputName" placeholder="Jane Doe"/>
							</div>
							<div className="col-sm-4 my-1">
								<label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
								<div className="input-group">
									<div className="input-group-prepend">
										<div className="input-group-text">@</div>
									</div>
									<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
								</div>
							</div>
							<div className="col-auto my-1">
								<button type="submit" className="btn btn-style">Submit</button>
							</div>
						</div>
					</form>		
				</section>
			</Fragment>
		);
	}
}

export default FormWallet;