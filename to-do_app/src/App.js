import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state= {
    todos:[],
    cTodo:''
  };

  handleChange = (e) =>{
    this.setState({
      cTodo:e.target.value
    })
  }

  addTodo = () =>{
    if(this.state.cTodo){
      let c = this.state.todos.slice();
      c.push(this.state.cTodo);
  
      this.setState({
        todos:c,
        cTodo:''
      })

    }
  }
  render() {

    let b = this.state.todos.map( (e, i)=>{
      return (
        <li key={i}>{e}</li>
      )
    });
    return (
      <div className="container mt-5">
        <input type="text" placeholder="enter todo" value={this.state.cTodo} onChange={this.handleChange} className="form-control"/>
        <center> <button className="btn btn-danger mt-5" onClick={this.addTodo}>add</button></center>
        {this.state.todos.length === 0 ? <h4>No hay tareas</h4> : <h5>Tienes {this.state.todos.length} tareas por hacer</h5>}

        {this.state.todos.length === 0 ? '...' : b}
      </div>     
    );
  }
}

export default App;
