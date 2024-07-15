import React from "react";

interface DisabledTextInputProps {
  text: string;
}

const DisabledTextInput: React.FC<DisabledTextInputProps> = ({ text }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full px-6 py-2 border-4 border-black text-2xl font-bold bg-background-disabled"
        value={text}
        disabled
      />
    </div>
  );
};

export default DisabledTextInput;
