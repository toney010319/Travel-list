import { StatisticsProps } from "../type";

const Statistics = ({ items }: StatisticsProps) => {
  const totalItems: number = items.length;
  const numberOfPacked: number = items.filter((item) => item.packed).length;
  const percentage: number = Math.round((numberOfPacked / totalItems) * 100);
  if (totalItems === 0) {
    return (
      <footer className="bg-[#68c1a4]    text-lg text-center p-5">
        Your list is empty
      </footer>
    );
  }
  return (
    <>
      <footer className="bg-[#68c1a4]    text-lg text-center p-5">
        <em>
          {percentage === 100
            ? "All done!"
            : `You have ${totalItems} items on your list, and you already packed ${numberOfPacked} of ${percentage}%`}
        </em>
      </footer>
    </>
  );
};

export default Statistics;
