import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

export const MyCalendar = () => {
    const [calendarValue, setCalendarValue] = useState<Date>(new Date());

    const handleCalendarChange: CalendarProps['onChange'] = (value) => {
        if (value instanceof Date) {
            setCalendarValue(value);
        }
    };

    return (
        <div className="calendar-wrapper">
            <div className="calendar-popup">
                <Calendar onChange={handleCalendarChange} value={calendarValue} />
            </div>
        </div>
    );
};
