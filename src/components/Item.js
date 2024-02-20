import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const handleCartStatus = () => {
    setIsInCart((currentVal) => !currentVal)
  }

  return (
    <li className={isInCart ? 'in-cart' : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartStatus} className="add">{isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
