import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  loadData,
  loadFilteredData
} from "../../actions/cartActions";
import Search from "../utils/Search/Search";
import axios from "axios";

class CHome extends Component {
  state = {
    data: null,
    food_data: null,
    // display_data: null,
    error: 0
  };

  async componentDidMount() {
    try {
      let food_resp = await axios("/api/menu/");
      this.setState({ food_data: food_resp.data.menus });
      this.setState({ data: this.state.food_data });
      this.props.loadData(this.state.food_data);
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  searchValue = async value => {
    // Copy the array
    let list_data = [...this.state.food_data];
    if (this.state.list_data === null) this.setState({ list_data });

    let list_data_filtered = this.state.data.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (list_data_filtered.length > 0) {
      this.setState({ data: list_data_filtered });
      this.props.loadFilteredData(list_data_filtered);
    }

    if (value.trim() === "") {
      this.setState({ data: list_data });
      this.props.loadFilteredData(list_data);
    }
  };

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.data.map(item => {
      return (
        <div className="card" key={item._id}>
          <div className="card-image">
            {/* <img src={item.img} alt={item.name} /> */}
            <span className="card-title">{item.name}</span>
          </div>

          <div className="card-content">
            <p>
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

    if (this.state.error === 1) {
      return (
        <div className="container">
          Cannot Be Processed Due to lack of quantity
        </div>
      );
    }

    return (
      <div className="container">
        <Search searchValue={this.searchValue} />
        <h3 className="center">Results</h3>

        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    loadData: item_arr => {
      dispatch(loadData(item_arr));
    },
    loadFilteredData: id_arr => {
      dispatch(loadFilteredData(id_arr));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CHome);
