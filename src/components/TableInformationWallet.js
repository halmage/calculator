import React,{Fragment,Component} from 'react';

/* Importando estilos de css */
import './styles/TableInformationWallet.css';

class TableInformationWallet extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<table className="table text-center mt-4">
					<thead className="thead-style">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Descripción</th>
							<th scope="col">Monto</th>
						</tr>
					</thead>
					<tbody id="table">
						<tr>
							<th scope="row">{data.id}</th>
							<td>{data.description}</td>
							<td className={data.money > 0 ? 'text-success' : 'text-danger'}>{data.money}$</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}
}

 export default TableInformationWallet;