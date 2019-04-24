import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  checkout
} from "../../actions/cartActions";

class Orders extends Component {
  state = {
    orders: null,
    finished_orders: null,
    flag: true
  };

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
    if (this.props.items.length > 0) {
      addedItems = this.props.items.map(item => {
        return (
          <React.Fragment>
            <div className="collection-item avatar" key={item._id}>
              <div className="item-desc">
                <span className="title">{item.name}</span>
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
    items: state.orders
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
