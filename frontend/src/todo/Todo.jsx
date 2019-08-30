import React, { Component } from 'react'

import Header from '../template/Header'
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'

export default props => (
    <div>
        <Header name='Tasks' small='Cadastro'></Header>
        <TodoForm />
        <TodoList />
    </div>
)