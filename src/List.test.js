import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

/* Test Suite for List Component */
describe('List component', () => {

  /* SMOKE */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={2} 
        header='Lorem Ipsum'
        cardIds={['a', 'c', 'e']} 
        allCards={{
            'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
            'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
          }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
/*  SNAPSHOT */
it('renders the UI as expected with props', () => {
    const tree = renderer
      .create(<List key={2} 
        header='Lorem Ipsum'
        cardIds={['a', 'c', 'e']} 
        allCards={{
            'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
            'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
          }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});

});