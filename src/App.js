import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./components/Plan";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handler = (e) => {
    this.setState({ text: e.target.value });
  };
  handlerAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({
        items: items,
        text: "",
      });
    }
  };
  handleDelete = (id) => {
    const olditems = [...this.state.items];
    const items = olditems.filter((Element, i) => {
      return i != id;
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's plan</h2>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="what's your plan?"
                  value={this.state.text}
                  onChange={this.handler}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 font-weight-bold"
                  onClick={this.handlerAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid mt-4">
                <ul className="list-unstyle row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
