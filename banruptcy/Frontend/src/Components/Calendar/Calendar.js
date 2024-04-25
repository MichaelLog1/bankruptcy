import './Calendar.css';
import { useState, useEffect } from 'react'
import Axios from "axios";

const Calendar = () => {
  // Date constructors
  const [currentDate, setCurrentDate] = useState(new Date());

  // Define Days and Months
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  // Render the Day names
  const renderDaysOfWeek = () => {
    return daysOfWeek.map(day => (
      <div key={day} className="calendar-day-name">
        {day}
      </div>
    ));
  };

  // This is for financial goals
  const [events, setEvents] = useState([]);

  // API request for user data
  const LoadEvents = () => {
    Axios.get('http://localhost:3001/financialdata').then(res => {
      setEvents(res.data);
      });
  }

  // Renders the calendar
  const renderDates = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    // Sets days for each month
    const dates = [];
    for (let i = 0; i < firstDay; i++) {
      dates.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Sets date numbers and events if applicable
    for (let i = 1; i <= days; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

      const dayEvents = events.filter(event => event.date === dateStr);

      dates.push(
        <div key={i} className="calendar-day">
          {i}
          {dayEvents.map(event => (
            <div key={event.id} className="event"><b>{event.description}</b></div>
          ))}
        </div>
      );
    }

    return dates;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // This is to call the API request once upon load
  useEffect(() => {
    LoadEvents();
  }, []);
  return (
    <div class="containerrr">
    <div className="calendar">
      <div className="calendar-nav">
        <button onClick={prevMonth}>Prev</button>
        <span>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-header">
        {renderDaysOfWeek()}
      </div>
      <div className="calendar-grid">
        {renderDates()}
      </div>
    </div>
    </div>
  );
};

export default Calendar;