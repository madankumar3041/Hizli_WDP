
import React, { Component } from 'react';

class Data extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    head: "Sales",
                    term: "Monthly Goal",
                    value: "50000k",    
                    growth: "8.9"
                },
                {
                    head: "Revenue",
                    term: "Total Profit",
                    value: "800k",
                    growth: "6.9"
                },
                {
                    head: "Clients",
                    term: "Subscribed",
                    value: "1575",
                    growth: "-3"
                },
                {
                    head: "New Users",
                    term: "Total",
                    value: "39,500k",
                    growth: "8.9"
                }

            ]
        }
    }
    render() {
        return (
            <div className='flex-container'>
                {
                    this.state.data.map((item) =>
                        <div className='chat'>
                            <div className="sameLines">
                                <h5 className="head">{item.head}</h5>
                                <h6 className="term">{item.term}</h6>
                            </div>
                            <div className="sameLine">
                                <h5 className="value">
                                    ${item.value}
                                </h5>
                                <h6 className="growth">{item.growth}%</h6>
                            </div>
                            <div className="chartContent">
                                
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Data;