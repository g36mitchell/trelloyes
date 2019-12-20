import React from 'react';
import List from './List.js';
import './App.css';

function App(props) {

  const lists = props.store.lists.map((list) =>
      
      <List key={list.id} 
            header={list.header} 
            cardIds={list.cardIds} 
            allCards={props.store.allCards} />
  );

  return (
    <main className="App">
        <header className='App-header'>
            <h1>{props.application}</h1>
        </header>
        <div className='App-list'>
            {lists}
        </div>
    </main>
  );
}

export default App;
