import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PageContainer from './index';
import SearchContainer from '../search-container';
import ResultsContainer from '../results-container';

describe('Page Container', () => {
  const component = shallow(
    <PageContainer />
  );

  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <PageContainer />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains a SearchContainer subcomponent', () => {
    expect(component.find(SearchContainer)).toHaveLength(1);
  });

  it('updates the search term when setNewSearchTerm() is called', () => {
    const before = component.state('searchTerm');
    component.instance().setNewSearchTerm('jquery');
    const after = component.state('searchTerm');
    expect(before).toEqual('');
    expect(after).toEqual('jquery');
  });

  it('contains a ResultsContainer subcomponent when a searchTerm exists', () => {
    component.instance().setNewSearchTerm('python');
    expect(component.find(ResultsContainer)).toHaveLength(1);
  });
});