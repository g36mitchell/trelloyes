import React from 'react';
import Card from './Card.js';
import './List.css';

class ListClass extends React.Component {

    static defaultProps = {
        header: 'New column',
        cardIds: ['a'],
        allCards: {
            'a': { id: 'a', title: 'New Card', content: 'Type your work here.' }
        },
    };    

    render() {
 


        const cards = this.props.cardIds.map((card) =>
        <Card 
            key={this.props.allCards[card].id} 
            content={this.props.allCards[card].content} 
            title={this.props.allCards[card].title} />
        );

        return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {cards}
                <button type="button" className="List-add-button">+ Add Random Card</button>
                </div>
            </section>
        );
    }

}

export default ListClass;