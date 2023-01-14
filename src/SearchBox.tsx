import React from "react";

const SearchBox = ({
  inputValue,
  onChange,
}: {
  inputValue: string;
  onChange: (value: string) => void;
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="input"
      value={inputValue}
      onChange={handleChange}
      placeholder="Search 🔍"
    />
  );
};

export default SearchBox;
