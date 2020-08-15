import React,{Component,Fragment} from 'react';
/* Importando componentes */
import Card from './Card';
	
class ListShop extends Component{
    render() {
      const {info} = this.props;     
      return (
        info.shop.map((inf, i) => {
            return ( 
              <Fragment>
               	  <Card key={i} info={inf}/>
              </Fragment>
            )
        })
      );
    }
}
export default ListShop;