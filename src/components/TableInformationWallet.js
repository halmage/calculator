import React,{Fragment,Component} from 'react';

/* Importando estilos de css */
import './styles/TableInformationWallet.css';

class TableInformationWallet extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<table className="table mt-4">
					<thead className="thead-style">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Descripción</th>
							<th scope="col"></th>
							<th scope="col">Monto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>{data.description}</td>
							<td></td>
							<td>{data.money}$</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}
}

 export default TableInformationWallet;