import React from 'react';
import { create } from 'react-test-renderer';
import { Map } from '../../screens';

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
