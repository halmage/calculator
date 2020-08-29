import React,{Component, Fragment} from 'react';
/* Importando estilos de css */
import '../assets/styles/componentes/ListShopTrolley.css'

class ListShopTrolley extends Component{
	render() {
	   const {items,onClickDelete} = this.props;	   
	   return (
		   items.map((item,i) => {
			   return(
				   <Fragment>
					   <li key={i} class="list-group-item mt-1">
					   	  <div className="row container mt-2">
					   	  	<div className="col-md-10">
							   <img src={item.image} alt={item.title} className="img-thumbnail image-list-style float-left mr-2"/>
							   <p><span className="h5 text-capitalize">{item.title} <span className="text-success h6">{item.price}$</span></span>
								   <br/>
								   {item.content}							   
							   </p>
					   	  	</div>
					   	  	<div className="col-md-2 mt-2">
					   	  		<button type="button" className="btn btn-outline-danger" onClick={onClickDelete.bind(this,i,item)}>&times;</button>
					   	  	</div>
					   	  </div>
					   </li>
				   </Fragment>
			   )
		   })							
	   );
	}
}
export default ListShopTrolley;