import CartWidget from "./CartWidget";

function Navbar({ logo, brand }) {
  return (
    <nav className="flex bg-blue-600 p-4 text-yellow-600 justify-between h-24 items-center">
      <div className="flex items-center justify-center w-full">
        <a href="" className="flex items-center gap-4">
          <img src={logo} alt="logo de la MARCA" className="h-16 w-16" />
          <h1 className="brand text-6xl text-center">{brand}</h1>
        </a>
      </div>
      <div className="flex items-center justify-around w-full">
        <ul className="flex text-center aling-center gap-24">
          <li>
            <a href="" className="text-2xl ">
              {"Producto 1"}
            </a>
          </li>
          <li>
            <a href="" className="text-2xl">
              {"Producto 2"}
            </a>
          </li>
          <li>
            <a href="" className="text-2xl">
              {"Producto 3"}
            </a>
          </li>
        </ul>
      </div>
      <CartWidget carrito={"../src/assets/shopping-cart.png"} />
    </nav>
  );
}

export default Navbar;
