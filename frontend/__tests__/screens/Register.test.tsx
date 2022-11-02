import React from 'react';
import { create } from 'react-test-renderer';
import Register from '../../screens/Register';

it(`renders correctly`, () => {
  const props: any = {};

  const tree = create(<Register {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
