import {Buttons} from '../data/buttons';
import {ButtonColors, RoundButton} from './basic-components/round-button';

const ExitButton = (props: {
  button?: Buttons;
  setButton: (b?: Buttons) => void;
}) => {
  const onClick = () => {
    if (props.button !== Buttons.Exit) {
      props.setButton(Buttons.Exit);
    } else {
      props.setButton();
    }
  };
  return (
    <RoundButton
      color={ButtonColors.Red}
      text={'Exit'}
      selected={props.button === Buttons.Exit}
      clickHandler={onClick}
    />
  );
};

export default ExitButton;
