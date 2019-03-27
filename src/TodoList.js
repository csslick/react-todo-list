import React, { Component, useState } from 'react';

export default function TodoList({todos}) {
  const list = todos.map((todo, key) => {
    return (
      <li key={key}>{todo}</li>
    )
  })
  
  return (
    <ul>
      {list}
    </ul>
  );
}

