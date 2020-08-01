import React,{Component} from 'react';
import './styles/TitlePage.css';

class TitlePage extends Component{
	render() {
		const {data} = this.props;
		return (
			<div className="bg-style-title-page">
				<h1 className="text-uppercase text-title-style text-center"> {data.titlePage || data} </h1>
			</div>
		);
	}
}

export default TitlePage;