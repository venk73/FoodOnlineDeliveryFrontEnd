import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import allCategories from '../../../Items/index';
import Biryanis from '../../../Images/Biryani.jpg';
import Burger from '../../../Images/Burger.jpg';
import Softdrinks from '../../../Images/Softdrinks.jpg';
import Meals from '../../../Images/Meals.jpg';
import Pizza from '../../../Images/Pizza.jpg';
import Desserts from '../../../Images/Desserts.jpg';
import Chinese from '../../../Images/Chinese.jpg';
import CategoryItem from '../CategoryItem/CategoryItem';
import Biryani from '../../../Items/Biryani';
import Burger1 from '../../../Items/Burger';
import Chinese1 from '../../../Items/Chinese';
import Pizza1 from '../../../Items/Pizza';
import Desserts1 from '../../../Items/Desserts';
import Softdrinks1 from '../../../Items/Softdrinks';
import Meals1 from '../../../Items/Meals';
//import BiryaniImgs from '../../../Images/BiryaniImgs';
import './Category.css';
const Category = (props) => {
	const [ Category, setCategories ] = useState([]);
	const [ selectedCategoryType, setSelectedCategoryType ] = useState('');
	
console.log(props.value)
	const selectedCategories = Category.filter((Category) =>Category.Items===selectedCategoryType);
	
console.log(Biryani)
let veg=[]
if(selectedCategoryType=='Biryanis'){
	veg=Biryani
}
 if(selectedCategoryType=='Burger'){
	veg=Burger1
	}
 if(selectedCategoryType=='Chinese'){
	veg=Chinese1
	}
	 if(selectedCategoryType=='Desserts'){
		veg=Desserts1
		}
		 if(selectedCategoryType=='Meals'){
			veg=Meals1
			}
			 if(selectedCategoryType=='Pizza'){
				veg=Pizza1
				}
				 if(selectedCategoryType=='Softdrinks'){
					veg=Softdrinks1
					}
	return (
		<section className="category-area  my-7 brownback">
			<div className="container">
				<nav>
					<br/>
					<br/>
					
					<ul className="nav justify-content-center">
						<li className="nav-item" onClick={() => setSelectedCategoryType('Biryanis')}>
							<span
								to="Biryanis"
								className={selectedCategoryType === 'Biryanis' ? 'active nav-link' : 'nav-link'}>
								<img src={Biryanis} alt="Images" height="200" width="200px" className="mr-2" />
								<li style={{color:"white"}}>Biryanis</li>
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedCategoryType('Meals')}>
							<span to="Meals" className={selectedCategoryType === 'Meals' ? 'active nav-link' : 'nav-link'}>
								<img src={Meals} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Meals</li>
							</span>
						</li>
				
				
						<li className="nav-item" onClick={() => setSelectedCategoryType('Burger')}>
							<span
								to="Burger"
								className={selectedCategoryType === 'Burger' ? 'active nav-link' : 'nav-link'}
							>
								<img src={Burger} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Burger</li>
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedCategoryType('Pizza')}>
							<span
								to="Pizza"
								className={selectedCategoryType === 'Pizza' ? 'active nav-link' : 'nav-link'}
							>
								<img src={Pizza} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Pizza</li>
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedCategoryType('Chinese')}>
							<span
								to="chinese"
								className={selectedCategoryType === 'Chinese' ? 'active nav-link' : 'nav-link'}
							>
								<img src={Chinese} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Chinese</li>
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedCategoryType('Desserts')}>
							<span
								to="Desserts"
								className={selectedCategoryType === 'Desserts' ? 'active nav-link' : 'nav-link'}
							>
								<img src={Desserts} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Desserts</li>
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedCategoryType('Softdrinks')}>
							<span
								to="Softdrinks"
								className={selectedCategoryType === 'Softdrinks' ? 'active nav-link' : 'nav-link'}
							>
								<img src={Softdrinks} alt="Images" width="200px" height="200" className="mr-2" />
								<li style={{color:"white"}}>Softdrinks</li>
							</span>
						</li>
						
					</ul>
					<div>
					{selectedCategories?.map}	
					</div>
				</nav>

				<div className="row my-5">{selectedCategories.map((Category) => <CategoryItem Category={Category} key={Category.id} />)}</div>


			
					
						<Link to="/cartdashboard">
							<button className="btn btn-danger">Select Your Items</button>
					 </Link>
					
			
			</div>
			
	  <table style={{color:"white"}}>
	  {veg.map(post => (
		<tr key={post.id}>
		<td>{post.name}</td>
		<td>{post.price}</td>
		</tr>))}

			</table>		
			</section>
	)}
			
						
               

				
				
export default Category;
