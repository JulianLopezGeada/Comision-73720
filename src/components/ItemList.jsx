import Item from "./item";

function ItemList({ items }) {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemList;
