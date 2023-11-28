import {Buttons} from '../App';
import {ButtonColors, RoundButton} from './basic-components/round-button';

const SafeButton = (props: {
  button?: Buttons;
  setButton: (b?: Buttons) => void;
}) => {
  const onClick = () => {
    if (props.button !== Buttons.Safe) {
      props.setButton(Buttons.Safe);
    } else {
      props.setButton();
    }
  };
  return (
    <RoundButton
      color={ButtonColors.Green}
      text={'Safe'}
      selected={props.button === Buttons.Safe}
      clickHandler={onClick}
    />
  );
};

export default SafeButton;
