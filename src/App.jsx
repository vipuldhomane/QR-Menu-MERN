// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Menu from "./components/menu";
import { useState } from "react";
import items from "./components/data";
import Categories from "./components/categories";
import NewMenu from "./components/newMenu";

const allcategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setcategories] = useState(allcategories);
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filterItems = (category) => {
    setSelectedCategory(category)
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    return setMenuItems(newItems);
  };

  return (

        <div className="flex flex-col  ">
          <h2 className="text-center text-2xl font-bold text-red-800 ">Our Menu</h2>
          {/* Categories section */}
          <Categories filterItems={filterItems} categories={categories} />
          {/* main menu */}
          {/* <Menu items={menuItems} /> */}
          <NewMenu items={menuItems} selectedCategory= {selectedCategory}/>
        </div>

  );
}

export default App;
