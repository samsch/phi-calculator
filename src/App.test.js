/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('The App component', () => {
  test('Should match a snapshot render', () => {
    const props = {
      base: 156,
      updateBase: () => {},
    };

    const renderedApp = renderer.create(<App {...props} />);
    expect(renderedApp.toJSON()).toMatchSnapshot();
  });
});
