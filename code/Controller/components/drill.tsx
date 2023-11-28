import {ButtonColors, RoundButton} from './basic-components/round-button';

const DrillButton = (props: {
  drill: boolean;
  setDrill: (b: boolean) => void;
}) => {
  const onClick = () => {
    if (props.drill === true) {
      props.setDrill(false);
    } else {
      props.setDrill(true);
    }
  };
  return (
    <RoundButton
      color={ButtonColors.Blue}
      text={'Drill'}
      selected={props.drill}
      clickHandler={onClick}
    />
  );
};

export default DrillButton;
