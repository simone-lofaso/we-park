import { create } from 'react-test-renderer';
import {ScanAI} from '../../screens/ScanAI';

it(`renders correctly`, () => {
  const tree = create(<ScanAI/>).toJSON();
  expect(tree).toMatchSnapshot();
});
