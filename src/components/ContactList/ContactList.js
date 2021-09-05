import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ol className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span className={styles.phonenumber}>{number}</span>
            <button
              type="button"
              className={styles.button}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}
