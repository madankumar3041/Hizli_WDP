import React from 'react';
import './App.css';
import Topheader from './Components/Top header';
import ChatData from './Components/ChatData';
import TeamConversation from './Components/TeamConver/TeamConversation';
import CalenderEvents from './Components/CalenderEvents';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="App">
      <Topheader />
      <ChatData />
      <div className="sameLine">
        <CalenderEvents />
        <TeamConversation />
      </div>
      <div className="tasksComponents">
        {["Task", "Activities", "Notifications"].map(item => <Tasks title={item} />)}
      </div>
    </div>
  );
}

export default App;
