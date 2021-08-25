// import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetContactsQuery } from '../../redux/phonebook/phonebook-slice';

// import { filterContact } from '../../redux/phonebook/phonebook-actions';
// import { getFilter } from '../../redux/phonebook/phonebook-selectors';

import styles from './Filter.module.css';

export default function Filter({ filterValue, handleFilterOnChange }) {
  // const value = useSelector(getFilter);
  // const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={handleFilterOnChange}
      />
    </label>
  );
}
