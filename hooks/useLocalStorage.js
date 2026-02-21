import { useEffect, useState } from "react";

export function useLocalStorage(myKey, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingValue = JSON.parse(localStorage.getItem(myKey));
    if (existingValue) {
      setData(existingValue);
    } else {
      localStorage.setItem(myKey, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(myKey, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(myKey, JSON.stringify(newData));
    }

    setData(newData);
  };

  return [data, updateLocalStorage];
}
