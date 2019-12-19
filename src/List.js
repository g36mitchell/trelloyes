import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {

   const cards = props.cardIds.map((card) =>
        <Card 
            id={props.allCards[card].id} 
            content={props.allCards[card].content} 
            title={props.allCards[card].title} />
    )


    return (
        <section key={props.id} className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cards}
            <button type="button" className="List-add-button">+ Add Random Card</button>
            </div>
        </section>
    );
}

export default List;