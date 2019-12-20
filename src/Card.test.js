import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

/* Test Suite for Card Component */
describe('Card component', () => {

  /* SMOKE */ 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 

it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card 
        key='a' 
        content='lorem ipsum cat scrabble clawing' 
        title='TITLE 1' />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
/*  SNAPSHOT */
it('renders the UI as expected with props', () => {
    const tree = renderer
      .create(<Card 
        key='a' 
        content='lorem ipsum cat scrabble clawing' 
        title='TITLE 1' />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});

});