import React, { Component } from "react";

class Check extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  //componentWillMount() {
  // console.log("componentWillMount...");
  //}

  //componentDidUpdate() {
  //console.log("componentDidUpdate...");
  //}

  //componentWillUpdate() {
  //console.log("componentWillUpdate...");
  //}

  //componentWillReceiveProps(nextProps, nextState) {
  //console.log("componentWillReceiveProps...");
  //}

  //static getDerivedStateFromProps(props, state) {
  //return {
  //check: "something",
  //};
  //}

  //getSnapshotBeforeUpdate(prevProps, prevState) {
  //console.log("getSnapshotBeforeUpdate...");
  //}

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Check;
