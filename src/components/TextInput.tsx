import { useEffect, useState } from "react";

interface Props {
  label?: string;
  type: string;
  value?: any;
  onBlur?: (value: any) => void;
}
export const TextInput = (props: Props) => {
  const { label, type, value, onBlur } = props;

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onBlur?.(value);
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div>
      {label && (
        <label className="form-label inline-block mb-2 text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className="
					form-control
					block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-gray-700
					bg-white bg-clip-padding
					border border-solid border-gray-300
					rounded
					transition
					ease-in-out
					m-0
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
				"
        id="exampleText0"
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};
