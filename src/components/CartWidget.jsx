function CartWidget({ carrito }) {
  return (
    <div className="flex basis-48 ">
      <a href="" className="flex items-start justify-center gap-2">
        <img
          src={carrito}
          alt="Icono de carro de compras"
          className="h-12 w-12"
        />
        <span className="cart-count h-6 w-6 bg-red-600 text-white text-xs rounded-2xl flex items-center justify-center">
          {0}
        </span>
      </a>
    </div>
  );
}

export default CartWidget;
