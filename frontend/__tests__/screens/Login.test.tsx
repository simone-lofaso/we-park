import React from 'react';
import { create } from 'react-test-renderer';
import Login from '../../screens/Login';

it(`renders correctly`, () => {
  const props: any = {};
  const tree = create(<Login {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
