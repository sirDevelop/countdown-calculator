import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    // runs before the component has rendered onto the application
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    // runs just after the component has rendered onto the application
    setInterval(() => {
      this.getTimeUntil(this.props.deadline);
    }, 1000);
  }

  leadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const timeInMilliseconds = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((timeInMilliseconds / 1000) % 60);
    const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div>
        <div className="Clock-days">
          {this.leadingZero(this.state.days)} days
        </div>
        <div className="Clock-hours">
          {this.leadingZero(this.state.hours)} hours
        </div>
        <div className="Clock-minutes">
          {this.leadingZero(this.state.minutes)} minutes
        </div>
        <div className="Clock-seconds">
          {this.leadingZero(this.state.seconds)} seconds
        </div>
      </div>
    );
  }
}

export default Clock;
