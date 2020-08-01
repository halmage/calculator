import React,{Component,Fragment} from 'react';

/* Llamando componentes */
import HomePresenter from '../presenter/HomePresenter';

/* Llamadas de imagenes */
import image1 from '../../images/articles/image-1.jpg';

import image2 from '../../images/articles/image-2.jpg';

import image3 from '../../images/articles/image-3.jpg';

class HomeContainer extends Component{

	state = {
				info:[
					{	
						title:"El rey leon",
						content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
						image:image1	
					},

					{	
						title:"El oso mayor",
						content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
						image:image2	
					},

					{	
						title:"El serpiente tenebrosa",
						content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
						image:image3	
					}
				],
				titlePage:"Enciclopedia"
			}

	render() {
		return (
			<Fragment>
				<HomePresenter 
							info={this.state.info} 
							titlePage={this.state.titlePage}
				/>
			</Fragment>
		);
	}
}

export default HomeContainer;
