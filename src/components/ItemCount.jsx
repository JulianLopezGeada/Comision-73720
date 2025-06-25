import { useState, useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const handleSumar = () => {
    setCount(count + 1);
  };
  const handleRestar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    return () => {};
  }, [count]);
  return (
    <div className="flex items-center m-auto justify-center mb-2 gap-5 w-36 bg-blue-500 p-4 rounded-lg">
      <button
        onClick={handleSumar}
        className="cursor-pointer text-amber-50 rounded-xl w-6 bg-cyan-400"
      >
        +
      </button>
      <p className="rounded-xl w-6 bg-cyan-400 text-amber-50">{count}</p>
      <button
        onClick={handleRestar}
        className="cursor-pointer text-amber-50 rounded-xl w-6 bg-cyan-400"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
