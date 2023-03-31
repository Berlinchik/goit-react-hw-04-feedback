import { useState } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [options, setFeadback] = useState({ good: 0, neutral: 0, bad: 0 });
  const optionNames = Object.keys(options);
  const { good, neutral, bad } = options;

  const onLeaveFeedback = name => {
    setFeadback(prev => {
      return { ...prev, [name]: prev[name] + 1 };
    });
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
