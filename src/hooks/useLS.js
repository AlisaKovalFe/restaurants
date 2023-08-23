import { useState, useEffect } from "react";

export const initializer = (initialValue, key) => {
    const storage = localStorage.getItem(key)
    if (storage !== null) {
        try {
            return JSON.parse(storage)
        } catch {
            return initialValue
        }
    }
    return initialValue
}

export default function useLocalStorage(initialValue, key) {
    const [value, setValue] = useState(initializer);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

