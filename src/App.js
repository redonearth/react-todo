import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';

const filters = ['all', 'active', 'done'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className={styles.appContainer}>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </div>
  );
}
