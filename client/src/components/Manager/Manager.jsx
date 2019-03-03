import React, { Component } from "react";

import "./Manager.css";
import Search from "./Search/Search";
import Value from "../utils/table/Value";
import { GridLoader } from "react-spinners";

class Manager extends Component {
  state = {
    data: {
      deli: [
        {
          id: 1,
          name: "Googler Jmaes",
          gender: "Male",
          age: 29,
          mobile: 9999988888,
          email: "jmaes@google.com"
        },
        {
          id: 2,
          name: "Samert Jmaes",
          gender: "Female",
          age: 22,
          mobile: 9999988888,
          email: "jmaes@google.com"
        },
        {
          id: 3,
          name: "Sasd Jmaes",
          gender: "Male",
          age: 12,
          mobile: 9999988888,
          email: "jmaes@google.com"
        }
      ]
    },
    allDeli: null,
    error: ""
  };

  // Need this for getting data from database
  // async componentDidMount() {
  //   try {
  //     const users = await axios("/api/users/");
  //     this.setState({ data: users.data });
  //   } catch (err) {
  //     this.setState({ error: err.message });
  //   }
  // }

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
    let values;

    if (this.state.data)
      values =
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
        return <h1 className="No-Users">No Results!</h1>;

    return (
      <React.Fragment>
<<<<<<< HEAD
        {/* <Switch>
          <Route path="/addDeli" component={AddDeli} exact />
          <Route path="/addHK" component={AddHK} exact />
        </Switch> */}
=======
        <div className="Table-Wrapper">
          <h1>Results: </h1>
          <Search searchValue={this.searchValue} />
          <table className="Table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{values}</tbody>
          </table>
        </div>
        {this.props.children}
>>>>>>> f8db207f8b581b92d3684bc5ac99dd4c249e196a
      </React.Fragment>
    );
  }
}

export default Manager;
