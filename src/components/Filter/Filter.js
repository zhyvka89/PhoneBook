import TextField from '@material-ui/core/TextField';

import styles from './Filter.module.css';

export default function Filter({ filterValue, onChange }) {
  return (
    <div className={styles.filterContainer}>
      <TextField
        id="text"
        label="Find Contact..."
        type="text"
        value={filterValue}
        onChange={onChange}
        variant="filled"
      />
    </div>
  );
}
