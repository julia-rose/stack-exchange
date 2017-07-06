import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import ResultsContainer from './index';

describe('Results Container', () => {
  const component = shallow(
    <ResultsContainer searchTerm="jquery" />
  );

  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <ResultsContainer searchTerm="jquery" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});