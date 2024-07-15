import React from "react";

interface CheckboxProps {
  label: string;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, setChecked, checked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label className="flex items-center w-fit">
      <input
        type="checkbox"
        className="mr-4 custom-checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="text-2xl font-bold">{label}</span>
    </label>
  );
};

export default Checkbox;
