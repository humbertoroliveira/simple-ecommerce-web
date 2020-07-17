import React from "react";
import { connect } from "react-redux";

class Newsletter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNewsletterInputChange = this.onNewsletterInputChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Day 2.1
    // Implement an identify() without a userId (AKA “anonymous identify”) but with an email trait
    // .: email is at this.state.emailValue
    // Implement the event “Newsletter Subscription Started”. No properties.

    alert("Thank you for subscribing!");
  };

  onNewsletterInputChange = (e) => {
    const emailValue = e.target.value;
    this.setState({
      emailValue,
    });
  };

  render() {
    return (
      <div className="well blosd">
        <span className="lead">Newsletter Subscription</span>

        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.searchValue}
              onChange={this.onNewsletterInputChange}
            />
            <span className="input-group-btn">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-envelope" />
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(undefined, mapDispatchToProps)(Newsletter);
