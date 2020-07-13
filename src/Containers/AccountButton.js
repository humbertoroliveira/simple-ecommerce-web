import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../selectors/Profile";
import { Link } from "react-router";

class AccountButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
      email: props.email,
    };
  }

  render() {
    return (
      <Link to="/profile" id="dLabel">
        <div className="col-md-3">
          <button
            className="btn btn-default"
            title={this.state.email ? this.state.email : "View Profile"}
          >
            {!this.state.userId && (
              <small>
                <span className="glyphicon glyphicon-question-sign" />
              </small>
            )}
            <span className="glyphicon glyphicon-user" />
          </button>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => getProfile(state);

export default connect(mapStateToProps)(AccountButton);
