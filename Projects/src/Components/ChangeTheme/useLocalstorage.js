import { useEffect, useState } from 'react';

export default function useLocalstorage({ key, defaultValue }) {
  // Lazily initialize the state
  const [value, setValue] = useState(() => {
    let currentvalue;
    try {
      const item = localStorage.getItem(key);
      currentvalue = item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      currentvalue = defaultValue;
      console.error(`Error reading localStorage key "${key}":`, err);
    }
    return currentvalue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Error setting localStorage key "${key}":`, err);
    }
  }, [key, value]);

  return [value, setValue];
}
