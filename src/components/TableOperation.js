import React,{Fragment,Component} from 'react';

/* importar estilos de css */
import '../assets/styles/componentes/TableOperation.css';

class TableOperation extends Component{
	render() {
		const {data} = this.props;
		return (
			<Fragment>
				<table class="table table-bordered table-border-style text-center table-text-style">
					<thead>
						<tr>
							<th scope="col">Primer numero</th>
							<th scope="col">Operación</th>
							<th scope="col">Segundo numero</th>
							<th scope="col">Resultado</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{data.num1}</td>
							<td style={{background:`${data.color}`}}>{data.operation}</td>
							<td>{data.num2}</td>
							<td>{data.result}</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}
}
export default TableOperation;