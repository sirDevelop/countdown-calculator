import React, { Component, useState } from "react";
import Clock from "./Clock";
import "./App.css";
import moment from "moment";
import Modal from "./Modal";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, " + new Date().getFullYear().toString(),
      newDeadline: "",
      modalShow: false,
    };
  }

  changeDeadline() {
    const validDate = moment(
      this.state.newDeadline,
      "MM/DD/YYYY",
      true
    ).isValid();

    if (validDate) {
      this.setState({ deadline: this.state.newDeadline, modalShow: false });
    } else {
      this.setState({ modalShow: true });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />

        <Form inline className="center">
          <FormControl
            className="deadline-input"
            placeholder="New date (mm/dd/yyyy)"
            onChange={(event) => {
              this.setState({
                newDeadline: event.target.value,
              });
            }}
          />
          <Button className="submit" onClick={() => this.changeDeadline()}>
            Calculate
          </Button>
          <Modal
            modalShow={this.state.modalShow}
            onClose={() => this.setState({ modalShow: false })}
          >
            Please enter a valid date in mm/dd/yyyy format
          </Modal>
        </Form>
      </div>
    );
  }
}

export default App;
