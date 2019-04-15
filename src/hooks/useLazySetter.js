import { useState, useEffect } from 'react';

// Our hook
export default function useLazySetter(value, delay) {
  const [currValue, setCurrValue] = useState(value);

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setCurrValue(value);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [value]
  );

  return currValue;
}
