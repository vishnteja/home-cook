import React, { Component } from "react";
import "./HK.css";
import Value from "../utils/table/Food";
import { GridLoader } from "react-spinners";

class HK extends Component {
  state = {
    data: {
      deli: [{ name: "Paneer Tadka", count: "10", cost: "200" }]
    },
    allDeli: null,
    error: ""
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
          <h1>Menu: </h1>
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

export default HK;
