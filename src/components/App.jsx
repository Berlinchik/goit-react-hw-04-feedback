import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[el] += 1;
      return newState;
    });
  };

  countTotalFeedback() {
    const data = Object.values(this.state);
    return data.reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total > 0
      ? Math.ceil((this.state.good / total) * 100) + '%'
      : 0 + '%';
  }

  render() {
    const optionNames = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionNames}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
