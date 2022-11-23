import React from 'react';
import { create } from 'react-test-renderer';
import { Map } from '../../screens';

jest.mock('@react-native-async-storage/async-storage');

it(`renders correctly`, () => {
  const props: any = {
    route: {
      params: {
        parkingSpace: 1,
      },
    },
  };
  const tree = create(<Map {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
