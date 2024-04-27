import { useState } from "react";
import { PackingListProps, Item } from "../type";

const PackingList = ({
  items,
  handleRemove,
  handlePack,
  handleClearItems,
}: PackingListProps) => {
  const [sortby, setSortBy] = useState("input");
  let sortedItems: Item[] = [];
  if (sortby === "input") {
    sortedItems = items;
  }
  if (sortby === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  console.log(sortby);
  return (
    <div className="bg-[#4d3524] flex flex-col   justify-between pt-10 pb-40 h-[63vh]">
      <ul className="flex flex-row  gap-10 justify-center items-center flex-wrap">
        {sortedItems.map((item: Item) => (
          <li
            key={item.id}
            className={`
            ${
              item.packed ? "line-through text-green-500" : ""
            } flex flex-row w-fit gap-2  text-white font-bold text-lg`}
          >
            <input type="checkbox" onClick={() => handlePack(item.id)} />
            <p> {item.quantity} </p>
            <p> {item.description}</p>

            <button onClick={() => handleRemove(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center  gap-2 ">
        <select
          value={sortby}
          onChange={(e) => setSortBy(e.target.value)}
          className=" bg-[#f7e2b7] p-2 rounded-3xl  px-4"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sory by Packed status</option>
        </select>
        <button
          onClick={handleClearItems}
          className=" bg-[#f7e2b7] p-2 rounded-3xl px-4"
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
