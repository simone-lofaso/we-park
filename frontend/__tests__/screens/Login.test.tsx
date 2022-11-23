import React from 'react';
import { create } from 'react-test-renderer';
import { Login } from '../../screens';

jest.mock('@react-native-async-storage/async-storage');

it(`renders correctly`, () => {
  const props: any = {};
  const tree = create(<Login {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
