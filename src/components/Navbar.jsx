import CartWidget from "./CartWidget";
import Dropdown from "./MenuDropdown";
import { useEffect, useState } from "react";
// import { Link } from "react-router";

function Navbar({ logo, brand }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products/categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.category));
  }, [categories]);

  return (
    <nav className="flex bg-blue-600 p-4 text-yellow-600 justify-between h-24 items-center">
      <div className="flex items-start justify-start w-full">
        <img src={logo} alt="logo de la MARCA" className="h-16 w-16" />
        <h1 className="brand text-6xl text-center">{brand}</h1>
      </div>
      <Dropdown></Dropdown>
      <CartWidget carrito={"../src/assets/shopping-cart.png"} />
    </nav>
  );
}

export default Navbar;
