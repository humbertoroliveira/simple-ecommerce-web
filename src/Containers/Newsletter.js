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
    // window.analytics.track("Newsletter Subscribed", {
    //   email: this.state.emailValue,
    // });
    // TODO: emit event for when User has subscribed to our newsletter
    // emailValue is @ this.state.emailValue
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
