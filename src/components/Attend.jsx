import React, { Component } from "react";
import { attend } from "../actions/index";
import { connect } from "react-redux";
class Attend extends Component {
  async componentDidMount() {
    const info = {
      id: this.props.match.params.id,
      listing: this.props.match.params.num
    };
    await this.props.attend(`${this.props.match.params.id}`);
  }
  state = {
    date: "August 12, 2020",
    time: "12:00 PM",
    host: "Greg",
    guest: "Steve"
  };

  render() {
    return (
      <div className="column">
        <img
          src="https://i.ibb.co/D1B3ZZ2/Walkers.png"
          alt="attendees walking"
          className="walking-img"
        />
        <h1>Looking good today!</h1>
        <p>
          We are so glad you are taking some time to catch up with a friend. By
          visiting this link, you've confirmed your appointment. Expect an email
          with your event information shortly.
        </p>
        <p className="no-margin-bottom">Thanks again,</p>
        <h3 className="small-margin-top">The Baristas</h3>
      </div>
    );
  }
}

function mapStateToProps() {
  return { test: true };
}

export default connect(mapStateToProps, { attend })(Attend);
