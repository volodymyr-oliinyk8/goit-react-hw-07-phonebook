import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import Actions from '../../redux/Phonebook/phonebook-actions';
import { selectors } from '../../redux/Phonebook';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    Find contact by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: selectors.getContactFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(Actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
