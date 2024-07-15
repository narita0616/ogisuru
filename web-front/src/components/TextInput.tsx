import React from "react";

interface TextInputProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = ({ setText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full px-6 py-2 border-4 border-black text-2xl font-bold"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
