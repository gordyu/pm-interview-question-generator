import React from 'react';
import Iframe from 'react-iframe';

{ /* TODO: Enable scheduling on this calendar */ }
function rCalendar() {
  return (
      <Iframe url="https://calendar.google.com/calendar/embed?src=awip2.0.0%40gmail.com&ctz=America%2FLos_Angeles"
        width="800px"
        height="600px"
        id="calendar"
        className="calendar"
        display="initial"
        position="relative"
    />
  );
}

export default rCalendar;