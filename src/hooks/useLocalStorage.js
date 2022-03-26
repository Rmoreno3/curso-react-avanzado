import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      value ? window.localStorage.setItem(key, JSON.stringify(value)) : window.localStorage.removeItem(key, value)
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setLocalStorage]
}
