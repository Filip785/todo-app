import React from 'react';
import './App.css';
import Task from './Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: '1'
    };

    this.onDragEndEv = this.onDragEnd.bind(this);
    this.handleAddEv = this.handleAdd.bind(this);
    this.doneItemEv = this.done.bind(this);
    this.removeItemEv = this.remove.bind(this);
  }

  handleAdd(e) {
    // enter is pressed
    if(e.keyCode === 13) {
      this.setState({
        id: `${(Number(this.state.id) + 1)}`,
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

  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const data = this.reorder(
      this.state.data,
      result.source.index,
      result.destination.index
    );

    this.setState({
      data
    });
  }
  
  render() {
    const { data } = this.state;
    const count = this.state.data.length;
    return (
      <div className="App">
        <input type="text" placeholder="Enter your task..." onKeyDown={this.handleAddEv} />
        <h1>{count === 0 ? 'No items' : count + ' Todos'}</h1>
        <DragDropContext onDragEnd={this.onDragEndEv}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="tasks"
            >
              {data.map((item, index) => ( 
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} >
                      <Task key={item.id} 
                            id={item.id} 
                            content={item.content} 
                            isDone={item.isDone} 
                            done={this.doneItemEv} 
                            remove={this.removeItemEv} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
    );
  }
}

export default App;
