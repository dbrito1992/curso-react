import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [
      'Berber Café',
      'Berber Água',
      'Estudar',
    ]
  };

  handleChange = (e)=>{
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render(){
    const {novaTarefa, tarefas} = this.state;
    return(
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#" className='form'>
        <input type="text" onChange={this.handleChange} />
        <button type="submit" value={novaTarefa}>
          <FaPlus />
        </button>
        </form>

        <ul className='tarefas'>
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className='edit' />
                <FaWindowClose className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
