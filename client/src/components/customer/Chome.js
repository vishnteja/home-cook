import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import {
  addToCart,
  loadData,
  loadFilteredData
} from "../../actions/cartActions";
import Search from "../utils/Search/Search";

class Chome extends Component {
  async componentDidMount() {
    try {
      let food_resp = await axios("/api/menu/");
      console.log(food_resp);
      this.props.loadData(food_resp.data.menus);
    } catch (err) {
      console.log(err);
    }
  }

  searchValue = async value => {
    // Copy the array
    let list_data = [...this.props.cart.food_data];
    if (list_data === null) list_data = this.props.cart.data;

    let list_data_filtered = this.props.cart.data.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if (list_data_filtered.length > 0) {
      this.props.loadFilteredData(list_data_filtered);
    }
    if (value.trim() === "") {
      this.props.loadFilteredData(list_data);
    }
  };

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let localData = this.props.cart;
    let itemList = localData.data.map(item => {
      return (
        <div className="card" key={item._id}>
          <div className="card-content">
            <p>
              <b>{item.name}</b>
              <br />
              <b>Price: {item.cost} $</b>
              <br />
              <b>Quantity: {item.count}</b>
            </p>
            <button
              className="Add-User-Reset"
              onClick={() => {
                this.handleClick(item._id);
              }}
            >
              Add
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <Search searchValue={this.searchValue} />
        <h3 className="center">Results</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}

Chome.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    loadData: item_arr => {
      dispatch(loadData(item_arr));
    },
    loadFilteredData: id_arr => {
      dispatch(loadFilteredData(id_arr));
    },
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chome);
