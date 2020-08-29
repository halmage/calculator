import React,{Component,Fragment} from 'react';

class ListUsersMessages extends Component{
	render() {
		const {data} = this.props;
		return (
			<ul className="list-group">
				{
				data.messages.map((message,i)=>{
				return(
				<Fragment>							  <li key={i} class="list-group-item mt-1">
					<div className="row">
						<div className="col-md-4">
							<img src={message.me.image} alt={message.me.name} className="mb-2" width="50" height="50" style={{borderRadius:"30px", padding:"5px",background:"blue"}}/>
							<span className="text-capitalize"> 			{message.me.name} {message.me.lost_name}
							</span>
							<br/>
							<img src={message.from.image} alt={message.from.name} width="50" height="50" style={{borderRadius:"30px", padding:"5px",background:"red"}}/>
							<span className="text-capitalize"> {message.from.name} {message.from.lost_name}
							</span>
						</div>
						<div className="col-md-8">
							<p>Asunto: {message.matter}</p>
							<p>
								{message.content}
							</p>
						</div>
					</div>
				</li>
				</Fragment>
				)})
				}
			</ul>
		);
	}	
}
export default ListUsersMessages;