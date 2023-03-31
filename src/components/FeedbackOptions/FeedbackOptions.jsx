import { ButtonsBox, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBox>
      {options.map(el => (
        <Button key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </ButtonsBox>
  );
};

FeedbackOptions.proptTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
