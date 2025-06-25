import Button from "./Button";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-1 overflow-hidden rounded-lg bg-orange-300 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img
          src={item.thumbnail}
          alt="imagen de producto"
          className="w-fit transition duration-300 ease-in-out hover:scale-105 dark:shadow-card rounded-t-lg md:h-64 lg:h-72 xl:h-80 2xl:h-96"
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className=" bg-amber-200 rounded-2xl mb-3 text-2xl font-semibold leading-tight dark:text-blue-400">
            {item.title}
          </h3>
          <p className="mb-3 text-zinc-100 text-lg font-bold leading-relaxed dark:text-dark-6">
            {item.description}
          </p>
          <Button
            text={"Detalles"}
            onClick={() => navigate(`/item/${item.id}`)}
          >
            Ver mas
          </Button>
        </div>
      </div>
    </>
  );
}

export default Item;
