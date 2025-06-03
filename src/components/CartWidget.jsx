function CartWidget({ carrito }) {
  return (
    <div className="flex items-end text-white p-2 rounded">
      <a href="">
        <span className="cart-count h-6 w-6 bg-red-600 text-white text-xs rounded-2xl flex items-center justify-center">
          {0}
        </span>
        <img
          src={carrito}
          alt="Icono de carro de compras"
          className="h-8 w-18"
        />
      </a>
    </div>
  );
}

export default CartWidget;
