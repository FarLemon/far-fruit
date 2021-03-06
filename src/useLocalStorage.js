import {useState, useEffect} from "react";

function getStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
    catch {
      return defaultValue
    }
  }
}

export const useLocalStorage = (key, defaulValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaulValue)
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]
}