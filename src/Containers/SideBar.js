import React from "react";
import BasketCart from "./BasketCart";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import { Link } from "react-router";

export const SideBar = () => {
  return (
    <div>
      <div className="row">
        <BasketCart />

        <Link to="/profile" id="dLabel">
          <div className="col-md-3">
            <button className="btn btn-default" title="View Profile">
              <span className="glyphicon glyphicon-user" />
            </button>
          </div>
        </Link>
      </div>
      <br />
      <Categories />
      <Newsletter />
    </div>
  );
};
