import React,{Fragment,Component} from 'react';
import Card from './Card'

const ListCard = (props) =>{
	return(
		props.info.map((data) =>{
			return(
				<Fragment>					
					<div className="mt-3">					
						<Card info={data}/>
					</div>
				</Fragment>
			)
		})
	)

}

export default ListCard;