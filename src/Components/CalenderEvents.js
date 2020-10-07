import React from 'react';
import PropTypes from 'prop-types';
import CalendarOne from '../calendar-Event/calendar';

const CalenderEvents = props => {
  const meetingDetails = [
    {
      image: "https://www.flaticon.com/svg/static/icons/svg/3590/3590153.svg",
      name: "UX Planning meeting",
      date: "09 April 8:00am - 10:00am",
      participants: "More than 12 members"
    },
    {
      image: "https://www.flaticon.com/svg/static/icons/svg/2824/2824740.svg",
      name: "App Design Project Meeting",
      date: "11 April 8:00am - 10:00am",
      participants: "More than 12 members"
    },
    {
      image: "https://www.flaticon.com/svg/static/icons/svg/2824/2824774.svg",
      name: "Friends Get Together Party",
      date: "24 April 8:00am - 10:00am",
      participants: "More than 12 members"
    }
  ];
  return (
    <div className="calenderEvents">
      <div className="sameLine">
        <h4> <img src="https://www.flaticon.com/svg/static/icons/svg/839/839762.svg"
           className="icons" />Calendar</h4>
        <button className="create">Create Event</button>
      </div>
      <div className="calenderAndEvents">
        <div className="events">
          <h3>Upcoming Events</h3>
          {meetingDetails.map(meeting => <div className="eventHolder">
            <img className="meetingImage" src={meeting.image} />
            <div className="evtData">
              <h5>{meeting.name}</h5>
              <div className="txtcol">
              <h6>{meeting.date}</h6>
              <h6>{meeting.participants}</h6>
             
              </div>
            </div>
          </div>)}
          
        </div>
        <div className="calenderHolder">
          <CalendarOne />
        </div>
        
      </div>
    </div>
    
  );
};

CalenderEvents.propTypes = {

};

export default CalenderEvents;