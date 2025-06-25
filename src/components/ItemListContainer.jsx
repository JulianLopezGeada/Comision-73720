import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    const urlCategory = `https://dummyjson.com/products/category/${categoryName}`;

    fetch(categoryName ? urlCategory : url)
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, [categoryName]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
