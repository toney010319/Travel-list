export type Item = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};

export type PackingListProps = {
  items: Item[];
  handleRemove: (id: number) => void;
  handlePack: (id: number) => void;
  handleClearItems: () => void;
};

export type StatisticsProps = {
  items: Item[];
};
