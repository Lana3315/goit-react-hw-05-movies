import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};
export default Section;

Section.propTypes = {
  children: PropTypes.array,
};