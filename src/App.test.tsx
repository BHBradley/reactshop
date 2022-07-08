import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Shows the Products list header', () => {
  // Arrange
  // ...

  // Act
  const { getByText } = render(<App />);
  // Assert
  expect(getByText('Products')).toBeTruthy();
});
