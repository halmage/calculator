import React,{Component,Fragment} from 'react';
/* Importando componentes */
import ShopCard from './ShopCard';
	
class ListShop extends Component{
    render() {
      const {info} = this.props;     
      return (
        info.shop.map((inf, i) => {
            return ( 
              <Fragment>
                <div className="p-2 ml-4">
               	  <ShopCard key={i} info={inf}/>
                </div>
              </Fragment>
            )
        })
      );
    }
}
export default ListShop;