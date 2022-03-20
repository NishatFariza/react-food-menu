import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [foods, setFood] = useState([])
  console.log(foods);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => setFood(data.meals))
  }, [])
  return (
    <>
    {/* food menu */}
    <div className='nav-menu'>
               <h1>Our Menu</h1>
               <ul>
                   <span>All</span>
                   <span>Breakfast</span>
                   <span>Lunch</span>
                   <span>Shakes</span>
               </ul>

           </div>

           {/* data sent */}
          <div>
            {foods.map(food => <Menu foodItem={food}> </Menu>)}
          
          </div>
    </>
  );
}

export default App;
