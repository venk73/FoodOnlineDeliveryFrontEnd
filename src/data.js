const products= [
  {
    "_id": "item1",
    "image": "/images/b1.jpg",
    "title": "Mutton Burger",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Burger"],
    "price": 120.0
  },
  {
    "_id": "item2",
    "image": "/images/b2.jpg",
    "title": "Chicken Burger",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Burger"],
    "price": 110.9
  },
  {
    "_id": "item3",
    "image": "/images/b4.jpg",
    "title": "Cheese Burger",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Burger"],
    "price": 90.5
  },
  {
    "_id": "item4",
    "image": "/images/b5.jpg",
    "title": "Mixed Burger",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Burger"],
    "price": 150.0
  },
  {
    "_id": "item5",
    "image": "/images/b6.jpg",
    "title": "Veg Burger",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Burger"],
    "price": 80.50
  },
  
  {
    "_id": "item6",
    "image": "/images/d3.jpg",
    "title": "Strawberry Cake",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Desserts"],
    "price": 80.0
  },
  {
    "_id": "item7",
    "image": "/images/d2.jpg",
    "title": "Thick Vanilla ice cream",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Desserts"],
    "price": 65.0
  },
  {
    "_id": "item8",
    "image": "/images/d4.jpg",
    "title": "Sweet",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Desserts"],
    "price": 50.0
  },
  {
    "_id": "item9",
    "image": "/images/d5.jpg",
    "title": "Vanilla ice cream",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Desserts"],
    "price": 47.0
  },
  {
    "_id": "item10",
    "image": "/images/d6.jpg",
    "title": "Red berry ice cream",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Desserts"],
    "price": 77.0
  },
  {
    "_id": "item11",
    "image": "/images/p1.jpg",
    "title": "Veg Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 130.0
  },
  {
    "_id": "item12",
    "image": "/images/p2.jpg",
    "title": "Cheese Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 135.0
  },
  {
    "_id": "item13",
    "image": "/images/p3.jpg",
    "title": "Pan Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 159.0
  },
  {
    "_id": "item14",
    "image": "/images/p4.jpg",
    "title": "Berry Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 153.0
  },
  {
    "_id": "item15",
    "image": "/images/p5.jpg",
    "title": "Spicy Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 146.0
  },
  {
    "_id": "item16",
    "image": "/images/p6.jpg",
    "title": "Chicken Pizza",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Pizza"],
    "price": 175.0
  },
  {
    "_id": "item17",
    "image": "/images/MB.jpg",
    "title": "Chicken Biryani",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Biryanis"],
    "price": 350.0
  },
  {
    "_id": "item18",
    "image": "/images/Mandi.jpg",
    "title": "Chicken Mandi",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Biryanis"],
    "price": 550.0
  },
  {
    "_id": "item19",
    "image": "/images/FB.jpg",
    "title": "Fish Biryani",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Biryanis"],
    "price": 380.0
  },
  {
    "_id": "item20",
    "image": "/images/Pb.jpg",
    "title": "Prawns Biryani",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Biryanis"],
    "price": 420.0
  },
  {
    "_id": "item21",
    "image": "/images/Mush-B.jpg",
    "title": "Mushroom Biryani",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Biryanis"],
    "price": 300.0
  },
  {
    "_id": "item22",
    "image": "/images/VegMeals.jpeg",
    "title": "Veg Meals",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Meals"],
    "price": 100.0
  },
  {
    "_id": "item23",
    "image": "/images/nonveg.jpg",
    "title": "Non-Veg Meals",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Meals"],
    "price": 180.0
  },
  {
    "_id": "item24",
    "image": "/images/ChickenNoodles.jpg",
    "title": "Chicken Noodles",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Chinese"],
    "price": 120.0
  },
  {
    "_id": "item25",
    "image": "/images/eggNoodles.jpg",
    "title": "Egg Noodles",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Chinese"],
    "price": 105.0
  },
  {
    "_id": "item26",
    "image": "/images/manchuria.jpg",
    "title": "Manchuria",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Chinese"],
    "price": 150.0
  },
  {
    "_id": "item27",
    "image": "/images/VegNoodles.jpg",
    "title": "veg Noodles",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Chinese"],
    "price": 95.0
  },
  {
    "_id": "item28",
    "image": "/images/friedrice.jpg",
    "title": "Fried Rice",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Chinese"],
    "price": 165.0
  },
  
  {
    "_id": "item29",
    "image": "/images/C1.jpg",
    "title": "Coca Cola",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Softdrinks"],
    "price": 73.0
  },
  {
    "_id": "item30",
    "image": "/images/S1.jpg",
    "title": "Choclate ThickShake",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Softdrinks"],
    "price": 184.0
  },
  {
    "_id": "item31",
    "image": "/images/Stra.jpg",
    "title": "Strawberry ThickShake",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Softdrinks"],
    "price": 164.0
  },
  {
    "_id": "item32",
    "image": "/images/SSF.jpg",
    "title": " Vanilla ThickShake",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Softdrinks"],
    "price": 174.0
  },
  {
    "_id": "item33",
    "image": "/images/D1.jpg",
    "title": "Red Bull",
    "description": "This is soooo Tasty...",
    "availableSizes": ["Softdrinks"],
    "price": 147.0
  }
  
  
]


 export default products