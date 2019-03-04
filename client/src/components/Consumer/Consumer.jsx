import React, { Component } from "react";
import "./Consumer.css";
import Value from "../utils/table/Food";
import { GridLoader } from "react-spinners";
import Search from "../utils/Search/Search";

class Consumer extends Component {
  state = {
    data: {
      deli: [{ hkname: "Yolo", name: "Paneer Tadka", count: "10", cost: "200" }]
    },
    allDeli: null,
    error: ""
  };

  searchValue = async value => {
    let allDeli = [this.state.data.deli];
    if (this.state.allDeli === null) this.setState({ allDeli });

    let deli = this.state.data.deli.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (deli.length > 0) this.setState({ data: { deli } });
    if (value.trim() === "")
      this.setState({ data: { deli: this.state.allDeli } });
  };

  render() {
    let list_items;
    if (this.state.data)
      list_items =
        this.state.data.deli &&
        this.state.data.deli.map(val => (
          <Value key={val.id} data={{ ...val }} />
        ));
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <GridLoader color={"#333"} />{" "}
        </div>
      );

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.deli.length)
        return <h1 className="No-Users">No Items Found!</h1>;

    return (
      <React.Fragment>
        <div className="Table-Wrapper">
          <h1>Search Food:</h1>
          <Search searchValue={this.searchValue} />
          <table className="Table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>{list_items}</tbody>
          </table>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Consumer;
