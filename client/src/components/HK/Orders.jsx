import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  checkout
} from "../../actions/cartActions";
import axios from "axios";

class Orders extends Component {
  state = {
    orders: [],
    finished_orders: null,
    flag: true
  };

  async componentDidMount() {
    try {
      let food_resp = await axios("/api/order/");
      let list_data_filtered = food_resp.data.orders.filter(({ hk_uname }) =>
        hk_uname.toLowerCase().includes(this.props.hkname.toLowerCase())
      );
      this.setState({ orders: list_data_filtered });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }
  handleAcceptOrder = args => {
    console.log("Accepted Order");
  };

  handleDeliverOrder = args => {
    console.log("Delivered Order");
  };

  handleCancelOrder = args => {
    console.log("Cancelled Order");
  };

  handleOpen = args => {
    console.log("Open for Business!");
    this.setState({ flag: false });
  };

  handleClose = args => {
    console.log("Closed for Business!");
    this.setState({ flag: true });
  };

  render() {
    var addedItems;
    if (this.state.orders.length > 0) {
      addedItems = this.state.orders.map(item => {
        return (
          <React.Fragment>
            <div className="collection-item avatar" key={item._id}>
              <div className="item-desc">
                <span className="title">{item.cust_uname}</span>
                <span className="title">{item.hk_uname}</span>
                <span className="title">{item.del_uname}</span>
                <span className="title">{item.total}</span>
                {/* <p>{item.desc}</p> */}
                <p>
                  <b>Quantity: {item.count}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        this.handleAcceptOrder(item._id);
                      }}
                    >
                      Accept
                    </button>
                  </Link>
                </div>
                <div className="add-remove">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        this.handleDeliverOrder(item._id);
                      }}
                    >
                      Deliver
                    </button>
                  </Link>
                </div>
                <div className="add-remove">
                  <button
                    onClick={() => {
                      this.handleCancelOrder(item._id);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      });
    } else {
      if (this.state.flag) {
        addedItems = (
          <React.Fragment>
            <p>Closed For Business</p>
          </React.Fragment>
        );
      } else {
        addedItems = (
          <React.Fragment>
            <p>Empty Cart</p>
          </React.Fragment>
        );
      }
    }

    let avail;
    if (this.state.flag) {
      avail = (
        <button
          onClick={() => {
            this.handleOpen();
          }}
        >
          Open
        </button>
      );
    } else {
      avail = (
        <button
          onClick={() => {
            this.handleClose();
          }}
        >
          Close
        </button>
      );
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="cart">
            <h5>ORDERS</h5>
            {avail}
            <ul className="collection">{addedItems}</ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.orders,
    hkname: state.auth.user.name
    //   data: state.data
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
)(Orders);
