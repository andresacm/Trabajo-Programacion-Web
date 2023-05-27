
import DatePicker from "react-datepicker"
import {useState} from "react"

function Date_() {

    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };
export default Date_