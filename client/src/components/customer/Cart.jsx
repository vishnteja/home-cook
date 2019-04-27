import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  checkout
} from "../../actions/cartActions";
import axios from "axios";

class Cart extends Component {
  state = {
    error: ""
  };

  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  handleCheckout = async e => {
    try {
      for (var i = 0; i < this.props.items.length; i++) {
        let temp = this.props.items[i];
        let org_item = this.props.data.find(item => item._id === temp._id);
        if (org_item.count >= temp.count) {
          org_item.count -= temp.count;
          // Update Database
          const newOrder = await axios.post("/api/order/", {
            cust_uname: this.props.custname,
            hk_uname: org_item.hkname,
            del_uname: "Default",
            total: this.props.total,
            order_status: "accepted"
          });
          console.log(newOrder);
        } else {
          console.log("Invalid Transaction");
        }
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
    this.props.checkout([]);
  };

  render() {
    var addedItems;
    if (this.props.items.length > 0) {
      addedItems = this.props.items.map(item => {
        return (
          <React.Fragment>
            <div className="collection-item avatar" key={item._id}>
              <div className="item-desc">
                <span className="title">{item.name}</span>
                {/* <p>{item.desc}</p> */}
                <p>
                  <b>Price: {item.cost} $</b>
                  <b>Quantity: {item.count}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        this.handleAddQuantity(item._id);
                      }}
                    >
                      Add
                    </button>
                  </Link>
                </div>
                <div className="add-remove">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        this.handleSubtractQuantity(item._id);
                      }}
                    >
                      Sub
                    </button>
                  </Link>
                </div>
                <div className="add-remove">
                  <button
                    onClick={() => {
                      this.handleRemove(item._id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      });
    } else {
      addedItems = (
        <React.Fragment>
          <p>Empty Cart</p>
        </React.Fragment>
      );
    }

    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
          <button
            onClick={() => {
              this.handleCheckout();
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.addedItems,
    data: state.cart.data,
    total: state.cart.total,
    custname: state.auth.user.name
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    },
    checkout: arg => {
      dispatch(checkout(arg));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
