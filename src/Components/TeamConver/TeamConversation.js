import React, { Component } from 'react';

class TeamConversation extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    sender: "Priya",
                    message: "Hi How are you? Any update on new design?"
                },
                {
                    sender: "Sri",
                    message: "Yes, Any updates?"
                },
                {
                    sender: "Sara",
                    message: "Any changes in needed in current design?"
                },
                {
                    sender: "Priya",
                    message: "Yes, few changes required."
                }
            ]
        }
    }
    render() {
        return (
            <div className="teamConversation">
                <h4>Team conversations</h4>
                <div className="teamsHolder">
                    <div className="verticleIcons">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => <img
                            src="https://www.flaticon.com/svg/static/icons/svg/1276/1276892.svg"
                            className="meetingImage" />)}
                    </div>
                    <div className="chatsHolder">
                        {this.state.data.map((item) =>
                            <div className='chatContent'>
                                <div className="chatMessage">{item.message}</div>
                                <h6 className="sender">{item.sender}</h6>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}




export default TeamConversation;