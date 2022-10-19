import { create } from 'react-test-renderer';
import { MonoText } from '../components/StyledText';
import {ScanAI} from '../screens/ScanAI';

it(`renders correctly`, () => {
  const tree = create(<ScanAI/>).toJSON();
  expect(tree).toMatchSnapshot();
});
