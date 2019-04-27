import React, { Component } from "react";
import axios from "axios";
// GUI components
import { GridLoader } from "react-spinners";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./HK.css";
import Search from "../utils/Search/Search";
import Value from "../utils/table/Food_hk";

class HK extends Component {
  state = {
    data: null,
    food_data: null,
    user_list: null,
    selected_user: null,
    error: ""
  };

  async componentDidMount() {
    try {
      let food_resp = await axios("/api/menu/");
      this.setState({ food_data: food_resp.data.menus });

      // Get user list
      let user_list = [];
      let hk_response = await axios("/api/hk/");
      let hk_data = hk_response.data.hks;
      for (var i = 0; i < hk_data.length; i++) {
        user_list.push(hk_data[i].name);
      }
      this.setState({ user_list: user_list });
      this.setState({ selected_user: user_list[0] });

      //filter based on selected_user from food_data
      let food_data_filtered = this.state.food_data.filter(({ hkname }) =>
        hkname.toLowerCase().includes(this.state.selected_user.toLowerCase())
      );
      this.setState({ data: food_data_filtered });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  searchValue = async value => {
    // Copy the array
    let list_data = [...this.state.data];
    if (this.state.list_data === null) this.setState({ list_data });

    let list_data_filtered = this.state.data.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (list_data_filtered.length > 0)
      this.setState({ data: list_data_filtered });

    if (value.trim() === "") this.setState({ data: list_data });
  };

  // selected is string
  setUserHandler = selected => {
    this.setState({ selected_user: selected });
    //filter based on selected_user
    let food_data_filtered = this.state.food_data.filter(({ hkname }) =>
      hkname.toLowerCase().includes(selected.toLowerCase())
    );
    this.setState({ data: food_data_filtered });
  };

  render() {
    let render_dropdown;
    // val is a string in user_list
    if (this.state.user_list)
      render_dropdown =
        this.state.user_list &&
        this.state.user_list.map(val => (
          <Dropdown.Item
            eventKey={val}
            // key is string
            onSelect={this.setUserHandler}
            as="button"
          >
            {val}
          </Dropdown.Item>
        ));
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <GridLoader color={"#333"} />{" "}
        </div>
      );

    // render table
    let values;
    if (this.state.data)
      values =
        this.state.data &&
        this.state.data.map(val => <Value key={val._id} data={{ ...val }} />);
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <GridLoader color={"#333"} />{" "}
        </div>
      );

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.length)
        return <h1 className="No-Users">No Results!</h1>;

    return (
      <React.Fragment>
        <div className="Table-Wrapper">
          <h1 className="results-title">
            Menu from {this.state.selected_user}{" "}
          </h1>
          <DropdownButton id="dropdown-item-button" title="Choose Home Kitchen">
            {render_dropdown}
          </DropdownButton>
          <Search searchValue={this.searchValue} />
          <div className="table-div" />
          <table className="Table">
            <thead>
              <tr>
                <th>HK Name</th>
                <th>Item Name</th>
                <th>Count</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>{values}</tbody>
          </table>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default HK;
