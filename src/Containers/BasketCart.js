import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getTotalBasketCount, getTotalBasketPrice } from "../selectors/Phones";

export const BasketCart = (props) => {
  const { totalBasketCount, totalPrice } = props;
  return (
    <div className="col-md-9">
      <Link to="/basket" id="dLabel">
        <button className="btn btn-default btn-block" title="View Basket">
          <span className="glyphicon glyphicon-shopping-cart" />
          {" : "}
          {totalBasketCount} item(s) (${totalPrice})
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state),
});

export default connect(mapStateToProps)(BasketCart);
