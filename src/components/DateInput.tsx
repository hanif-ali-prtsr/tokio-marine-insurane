import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ValidationErrors } from "./ValidationErrors";

interface Props {
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  errors?: string[];
}
export const DateInput = (props: Props) => {
  const { label, value, onChange, errors } = props;

  const [dateValue, setDateValue] = useState<Date | null>(null);

  useEffect(() => {
    if (value) {
      const parts = value.split("/");
      setDateValue(new Date(parts[2], parts[0] - 1, parts[1]));
    }
  }, [value]);

  const handleChange = (date: Date) => {
    setDateValue(date);

    const formattedValue = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    onChange?.(formattedValue);
  };

  return (
    <div>
      {label && (
        <label className="form-label inline-block mb-2 text-gray-700">
          {label}
        </label>
      )}
      <DatePicker
        className="calendar-field__input"
        onChange={handleChange}
        // value={inputValue}
        selected={dateValue}
        dateFormat="MM/dd/yyyy"
      />
      <ValidationErrors errors={errors} />
    </div>
  );
};
