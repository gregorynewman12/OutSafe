import {Buttons} from '../App';
import {ButtonColors, RoundButton} from './basic-components/round-button';

const SIPButton = (props: {
  button?: Buttons;
  setButton: (b?: Buttons) => void;
}) => {
  const onClick = () => {
    if (props.button !== Buttons.SIP) {
      props.setButton(Buttons.SIP);
    } else {
      props.setButton();
    }
  };
  return (
    <RoundButton
      color={ButtonColors.Yellow}
      text={'SIP'}
      selected={props.button === Buttons.SIP}
      clickHandler={onClick}
    />
  );
};

export default SIPButton;
