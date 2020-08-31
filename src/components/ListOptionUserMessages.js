import React,{Fragment,Component} from 'react';

class ListOptionUserMessages extends Component{
	render() {
		const {info} = this.props;
		return (
			<Fragment>
			{
			    info.messages.map((message,i) => {
				    return (
							<Fragment>
								<option key={i}  value={message.id}>{message.name} {message.lost_name}</option>
							</Fragment>
					)})
			}
			</Fragment>
		);
	}
}
export default ListOptionUserMessages;