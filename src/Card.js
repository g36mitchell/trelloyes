import React from 'react';
import './Card.css';

class CardClass extends React.Component {

    static defaultProps = {
        title: 'New Card',
        content: 'Put your activities here.'
    };

    render() {
 
        return (
            <div className='Card'>
                <button type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default CardClass;