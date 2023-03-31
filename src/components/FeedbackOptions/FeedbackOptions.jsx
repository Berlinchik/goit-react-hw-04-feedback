import React, { Component } from 'react';
import { ButtonsBox, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static proptTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonsBox>
        {options.map(el => (
          <Button key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        ))}
      </ButtonsBox>
    );
  }
}

export default FeedbackOptions;
