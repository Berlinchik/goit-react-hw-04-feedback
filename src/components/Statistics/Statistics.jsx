import PropTypes from 'prop-types';
import { Container, Title, List, Item } from './Statistics.styled';
import Notification from '../Notification/Notification';

const Statistics = props => {
  const data = Object.entries(props);

  return (
    <Container>
      <Title>Statistics</Title>
      {props.total > 0 ? (
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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
