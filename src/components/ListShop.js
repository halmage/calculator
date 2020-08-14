import React,{Component,Fragment} from 'react';

/* Importando componentes */
import Card from './Card';
	
class ListShop extends Component{
    render() {
      const {articles} = this.props;     
      return (
        articles.articles.map((article, i) => {
            return ( 
              <Fragment>
               	  <Card key={i} info={article}/>
              </Fragment>
            )
        })
      );
    }
}
export default ListShop;