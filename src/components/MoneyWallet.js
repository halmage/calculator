import React,{Fragment,Component} from 'react';

class MoneyWallet extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<h1 className="text-center">{data.wallet}$</h1> 
			</Fragment>
		);
	}
}
export default MoneyWallet;