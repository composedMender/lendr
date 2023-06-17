import React, { useState } from 'react';
import './App.css'; // Import a CSS file for the styles
import Box from './Box';
import Calendar from './Calendar';
import { EventBlock, EventDisplay } from './Event';
import TimeBar from './TimeBar';

const Home = () => {
    // example event data
    const [event, setEvent] = useState({
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      title: 'Meeting',
      description: 'Discuss project updates',
    });
    const handleEventChange = (updatedProperties) => {
      setEvent((prevEvent) => ({
        ...prevEvent,
        ...updatedProperties,
      }));
    };

    return (
      <div className="container">
        <div className="row">
          <div className="column-25">
            <h2>Column 1</h2>
            <p>This is a 25% width column</p>
            
            <Box title="箱題" children="">
              <p>This is my box where I put stuff and fill it up with alots of context nthat content lmao</p>
            </Box>
            <Box title='霊感'>
              <p>This is the inspiration block where I can put fun and inspiring things or something like that but mostly I just keep my filler text here y'know wwww笑う</p>
            </Box>
          </div>
          <div className="column-50">
            <h2>Column 2</h2>
            <p>This is a 50% width column</p>
            <Calendar title='Your Calendar'>
              {/* <EventBlock event={event} onEventChange={handleEventChange} /> */}
              <EventDisplay event={event} hour={0}/>
            </Calendar>
          </div>
          <div className="column-25">
            <div id='scroll-container'>
              <div id='scroll-text'>this is scrolling text</div>
            </div>
            <h2>Column 3</h2>
            <p>This is a 25% width column</p>
            <Box title='今再生'>
            </Box>
            <Box title='トップ曲'>
            </Box>
          </div>
        </div>
        
        <footer className="footer">
          {/* Footer content */}
        </footer>
      </div>
    );
  };
  
  export default Home;
  