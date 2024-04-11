import './Calendar.css';
import { useState } from 'react'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderDaysOfWeek = () => {
    return daysOfWeek.map(day => (
      <div key={day} className="calendar-day-name">
        {day}
      </div>
    ));
  };

  const [events, setEvents] = useState([
    { id: 1, date: '2024-04-15', description: 'Save $100 for video games' },
    { id: 2, date: '2024-04-22', description: '1500 for rent' }
  ]);



  const renderDates = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    const dates = [];
    for (let i = 0; i < firstDay; i++) {
      dates.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= days; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

      const dayEvents = events.filter(event => event.date === dateStr);

      dates.push(
        <div key={i} className="calendar-day">
          {i}
          {dayEvents.map(event => (
            <div key={event.id} className="event">{event.description}</div>
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
      <div className="calendar-grid" onClick={()=>{/* we need some functonality for adding to the calendar */}}>
        {renderDates()}
      </div>
    </div>
    </div>
  );
};

export default Calendar;