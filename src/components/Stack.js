import React from "react";

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

export default class Stack extends React.Component {
  state = {
    items: [1, 2, 3],
    newItem: "",
    nextItem: "",
    isEmpty: ""
  };

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handlePushClick = e => {
    const items = this.state.items.concat(this.state.newItem);
    this.setState({
      items,
      newItem: "",
      nextItem: ""
    });
  };

  handlePopClick = e => {
    const items = [...this.state.items];
    if (!items.length) return;
    items.pop();
    this.setState({
      items,
      nextItem: ""
    });
  };

  handlePeekClick = () => {
    const items = this.state.items;
    if (!items.length) return;
    const nextItem = items[items.length - 1];
    this.setState({
      nextItem
    });
  };

  handleIsEmptyClick = () => {
    const items = this.state.items;
    const isEmpty = !items.length ? true : false;
    this.setState({
      isEmpty
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <label>Stack items: </label>
          <input type="text" value={this.state.items} disabled />
        </div>
        <div className="row">
          <label>New item: </label>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <Button text="Push" onClick={this.handlePushClick} />
        </div>
        <div className="row">
          <label>Use Pop to remove top element from stack: </label>
          <Button text="Pop" onClick={this.handlePopClick} />
        </div>
        <div className="row">
          <label>Stack top element: </label>
          <input type="text" value={this.state.nextItem} disabled />
          <Button text="Peek" onClick={this.handlePeekClick} />
        </div>
        <div className="row">
          <label>Check if array is empty: </label>
          <input type="text" value={this.state.isEmpty} disabled />
          <Button text="isEmpty" onClick={this.handleIsEmptyClick} />
        </div>
      </div>
    );
  }
}
