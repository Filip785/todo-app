import React from 'react';
import './App.css';
import Task from './Task';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, content: 'Do something', isDone: false },
        { id: 2, content: 'Do something else', isDone: false }
      ]
    };

    this.doneItem = this.done.bind(this);
    this.removeItem = this.remove.bind(this);
  }

  done(id) {
    const data = this.state.data.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item);

    this.setState({ data });
  }

  remove(id) {
    this.setState({
      data: this.state.data.filter((item, _) => item.id !== id)
    });
  }
  
  render() {
    const { data } = this.state;
    const count = this.state.data.length;
    
    return (
      <div className="App">
        <input type="text" placeholder="Enter your task..." />
        <h1>{ count } Todos</h1>

        <div className="tasks">
          {data.map((item) => <Task key={item.id} id={item.id} content={item.content} isDone={item.isDone} done={this.doneItem} remove={this.removeItem} />)}
        </div>
      </div>
    );
  }
}

export default App;
