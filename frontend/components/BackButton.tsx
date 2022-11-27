import { RootStackScreenProps } from '../types';
import { Button, ButtonProps } from './Button';

type BackButtonProps = {
  navigation: RootStackScreenProps<any>['navigation'];
} & Omit<ButtonProps, 'text'>;

export const BackButton = ({ navigation, ...props }: BackButtonProps) => {
  return <Button {...props} text='Back' onPress={() => navigation.pop(1)} />;
};
