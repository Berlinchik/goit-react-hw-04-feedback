import { useState } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const optionNames = Object.keys(options);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const data = Object.values(options);
    return data.reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.ceil((good / total) * 100) + '%' : 0 + '%';
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={optionNames}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default App;
