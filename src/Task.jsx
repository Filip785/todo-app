import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className={"task" + (this.props.isDone ? ' is-done' : '')}>
        <h1>{this.props.content}</h1>
        <div className="icons">
          <div className="done" onClick={() => this.props.done(this.props.id)}></div>
          <div className="remove" onClick={() => this.props.remove(this.props.id)}></div>
        </div>
      </div>
    );
  }
}

export default Task;