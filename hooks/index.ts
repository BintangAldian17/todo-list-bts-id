import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            console.log(item, "ITEM")
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn("Error reading localStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn("Error setting localStorage", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
};
