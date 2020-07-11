import React from "react";
import { connect } from "react-redux";
import {
  getTotalBasketPrice,
  getBasketPhonesWithCount,
} from "../selectors/Phones";
import R from "ramda";
import {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
} from "../actions/Phones";
import { Link } from "react-router";
import Coupon from "./Coupon";

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
}) => {
  //TODO: implement event for when User viewed their shopping cart
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div> Your shopping cart is empty </div>}
        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {phones.map((phone, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>${phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                    <span
                      className="delete-cart"
                      onClick={() => removePhoneFromBasket(phone.id)}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {R.not(isBasketEmpty) && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total:</b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div>
        <Coupon />
        {R.not(isBasketEmpty) && (
          <div>
            <button className="btn btn-danger" onClick={() => cleanBasket()}>
              <span className="glyphicon glyphicon-trash" />
              Clean Cart
            </button>
            <button
              className="btn btn-success"
              onClick={() => basketCheckout(phones)}
            >
              <span className="glyphicon glyphicon-envelope" />
              Checkout
            </button>
          </div>
        )}
        <Link className="btn btn-default" to="/">
          <span className="glyphicon glyphicon-circle-arrow-left" />
          <span> Continue Shopping</span>
        </Link>
      </div>
    );
  };

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  removePhoneFromBasket: (id) => dispatch(removePhoneFromBasket(id)),
  cleanBasket: () => dispatch(cleanBasket()),
  basketCheckout: (phones) => dispatch(basketCheckout(phones)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
