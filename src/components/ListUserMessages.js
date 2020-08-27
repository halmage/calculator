import React,{Fragment,Component} from 'react';

class ListUserMessages extends Component{
	render() {
		const {info} = this.props;
		return (
			<Fragment>
			{
			    info.messages.map((message) => {
				    return (
							<Fragment>
								<option value={message.id}>{message.name} {message.lost_name}</option>
							</Fragment>
						    )})
			}
			</Fragment>
		);
	}
}
export default ListUserMessages;