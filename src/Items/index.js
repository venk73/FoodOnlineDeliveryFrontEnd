import Biryani from './Biryani';
import Burger from './Burger';
import Chinese from './Chinese';
import Softdrinks from './Softdrinks';
import Desserts from './Desserts';
import Meals from './Meals';
import Pizza from './Pizza';

const allCategories= [
	{Biryanis:[...Biryani]},
	{Chinese:[...Chinese]},
	{Pizza:[...Pizza]},
	{Burger:[...Burger]},
	{Meals:[...Meals]},
	{Desserts:[...Desserts]},
	{Softdrinks:[...Softdrinks]}
];

// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }

export default allCategories;
