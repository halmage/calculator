import React,{Fragment,Component} from 'react';

/* Importando estilos de css */
import '../assets/styles/componentes/TableInformationWallet.css';

class TableInformationWallet extends Component{
	render() {
		const {info} = this.props;
		return (
			<Fragment>
				<table className="table text-center mt-4">
					<thead className="thead-style">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Descripción</th>
							<th scope="col">Monto</th>
							<th scope="col">Fecha</th>
						</tr>
					</thead>
					<tbody id="table">
					{
						info.map((inf) =>{
							return(
								<Fragment>
								<tr>
									<th scope="row">{inf.id}</th>
									<td>{inf.description}</td>
									<td className={inf.money > 0 ? 'text-success' : 'text-danger'}>{inf.money}$</td>
									<td>{inf.date}</td>
								</tr>
								</Fragment>
						)})
					}
					</tbody>
				</table>
			</Fragment>
		);
	}
}
 export default TableInformationWallet;
