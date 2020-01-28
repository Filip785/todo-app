import React from 'react';
import './App.css';
import Task from './Task';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: 0
    };

    this.handleAddEv = this.handleAdd.bind(this);
    this.doneItem = this.done.bind(this);
    this.removeItem = this.remove.bind(this);
  }

  handleAdd(e) {
    if(e.keyCode === 13) {
      this.setState({
        id: (this.state.id + 1),
        data: [...this.state.data, { id: this.state.id, content: e.target.value, isDone: false }]
      });
    }
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
        <input type="text" placeholder="Enter your task..." onKeyDown={this.handleAddEv} />
        <h1>{count === 0 ? 'No items' : count + ' Todos'}</h1>

        <div className="tasks">
          {data.map((item) => <Task key={item.id} id={item.id} content={item.content} isDone={item.isDone} done={this.doneItem} remove={this.removeItem} />)}
        </div>
      </div>
    );
  }
}

export default App;
