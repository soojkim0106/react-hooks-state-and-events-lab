import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleFilter = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredItem = selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilter} value= {selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
