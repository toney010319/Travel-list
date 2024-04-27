import { useState } from "react";
import { Item } from "../type";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

const Form = () => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

  const handleAdditems = (item: Item) => {
    setItems((items) => [...items, item]);
  };
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description) return;

    const newItem: Item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    handleAdditems(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleRemove = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearItems = () => {
    setItems([]);
  };
  const handlePack = (id: number) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  };
  console.log(items);
  return (
    <div>
      <form className="bg-[#df6c19]" onSubmit={handleAdd}>
        <div className="flex justify-center align-center py-8 gap-4">
          <p>what do you need for you trip?</p>
          <input
            type="text"
            placeholder="Enter your item"
            className="bg-[#fde8aa] py-1 px-5 rounded-3xl"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="quantity.."
            className="bg-[#fde8aa] py-1 px-5 rounded-3xl"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button className="bg-[#68c2a2] py-1 px-5 rounded-3xl">Submit</button>
        </div>
      </form>
      <PackingList
        items={items}
        handleRemove={handleRemove}
        handlePack={handlePack}
        handleClearItems={handleClearItems}
      />
      <Statistics items={items} />
    </div>
  );
};

export default Form;
