import React from "react";

interface PullDownProps {
  items: string[];
  setSelectedPullDownItems: React.Dispatch<React.SetStateAction<string>>;
}

const PullDown: React.FC<PullDownProps> = ({
  items,
  setSelectedPullDownItems,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPullDownItems(event.target.value);
  };

  return (
    <div className="w-full">
      <select
        className="w-full px-6 py-2 border-4 border-black text-2xl font-bold custom-select bg-white"
        onChange={handleChange}
        defaultValue="未選択"
      >
        <option value="未選択" disabled>
          未選択
        </option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PullDown;
