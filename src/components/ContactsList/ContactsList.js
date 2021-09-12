import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { operations, selectors } from '../../redux/Phonebook';

const ContactsList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} name={name} key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
