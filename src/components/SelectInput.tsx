import { t } from "../i18nConfig";

interface Props {
  label?: string;
  placeholder?: string;
  options: Array<{ value: string | number; label: string }>;
  onChange?: (value: string | number) => void;
  value?: any;
}
export const SelectInput = (props: Props) => {
  const { label, options, placeholder = "", onChange, value } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="form-label inline-block mb-2 text-gray-700">
          {label}
        </label>
      )}
      <select
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
        placeholder="Text input"
        value={value ?? ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          {t("Select an option")}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};