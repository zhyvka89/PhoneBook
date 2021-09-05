// import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetContactsQuery } from '../../redux/phonebook/phonebookApi';

import TextField from '@material-ui/core/TextField';

import styles from './Filter.module.css';

export default function Filter({ filterValue, onChange }) {
  // const value = useSelector(getFilter);
  // const dispatch = useDispatch();

  return (
    <div className={styles.filterContainer}>
      <TextField
        id="text"
        label="Filter"
        type="text"
        value={filterValue}
        onChange={onChange}
        variant="filled"
      />
    </div>

    // <label className={styles.label}>
    //   Find contacts by name
    //   <input
    //     className={styles.input}
    //     type="text"
    //     value={filterValue}
    //     onChange={handleFilterOnChange}
    //   />
    // </label>
  );
}
