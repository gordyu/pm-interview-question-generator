import React from 'react';
import Iframe from 'react-iframe';

{ /* TODO: Enable scheduling on this calendar */ }
function eCalendar(props) {
  return (
      <Iframe url="https://calendar.google.com/calendar/selfsched?sstoken=UUZRckhfdFU4RHJzfGRlZmF1bHR8ZjUxNDVjYzZkMWU3NGE2NzA2ZjZiZjZmY2FmMDVmMTY"
        width="800px"
        height="600px"
        id="calendar"
        className="calendar"
        display="initial"
        position="relative"
    />
  );
}

export default eCalendar;