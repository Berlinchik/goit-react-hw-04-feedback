import { MainSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Title>{title}</Title>
      {children}
    </MainSection>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
