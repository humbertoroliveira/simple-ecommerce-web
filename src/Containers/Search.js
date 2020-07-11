import React from "react";
import { connect } from "react-redux";
import { searchPhone } from "../actions/Phones";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchPhone(this.state.searchValue);
  };

  onSearchInputChange = (e) => {
    const searchValue = e.target.value;
    this.setState({
      searchValue,
    });
  };

  render() {
    return (
      <div className="well blosd">
        <span className="lead">Quick Filter</span>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.searchValue}
              onChange={this.onSearchInputChange}
            />
            <span className="input-group-btn">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

// export default Search;

const mapDispatchToProps = (dispatch) => ({
  searchPhone: (text) => dispatch(searchPhone(text)),
});

export default connect(undefined, mapDispatchToProps)(Search);
