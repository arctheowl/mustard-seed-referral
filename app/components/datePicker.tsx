import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

interface DatePickerProps {
  dateValue: Date | null;
  dateChange: (date: Date | null | [Date | null, Date | null]) => void;
}

const DatePickerInput: React.FC<DatePickerProps> = ({
  dateValue,
  dateChange,
}) => {
  return (
    <DatePicker
      onChange={(value) => {
        if (!Array.isArray(value)) {
          dateChange(value);
        }
      }}
      value={dateValue}
      required
      format="dd/MM/yyyy"
      minDate={new Date("2013-08-31")}
      maxDate={new Date("2021-08-31")}
      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
    />
  );
};

export default DatePickerInput;
