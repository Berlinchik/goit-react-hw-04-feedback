import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, List, Item } from './Statistics.styled';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const data = Object.entries(this.props);

    return (
      <Container>
        <Title>Statistics</Title>
        {this.props.total > 0 ? (
          <List>
            {data.map(([key, value]) => (
              <Item key={key}>
                {key}: {value}
              </Item>
            ))}
          </List>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default Statistics;
