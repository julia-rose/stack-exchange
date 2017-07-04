import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import SearchContainer from './index';

describe('Search Container', () => {
  const mockSetSearchTerm = jest.fn();
  const component = shallow(
    <SearchContainer setNewSearchTerm={mockSetSearchTerm} />
  );

  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <SearchContainer />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});