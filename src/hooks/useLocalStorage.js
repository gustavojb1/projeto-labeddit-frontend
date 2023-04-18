import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return (local ? local : initialState)
  });

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState]
}

export default useLocalStorage