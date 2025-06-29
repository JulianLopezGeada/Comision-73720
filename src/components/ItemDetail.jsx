import ItemCount from "./ItemCount";

function ItemDetail(item) {
  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={item?.thumbnail} alt={item?.title} />
        <h2>{item?.title}</h2>
        <p>{item?.description}</p>
        <p>Price: ${item?.price}</p>
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail;
