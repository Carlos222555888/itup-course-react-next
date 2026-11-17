// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { // read once, in the browser
        const item = localStorage.getItem(key);
        if (item) setValue(JSON.parse(item));
        setLoaded(true);
    }, [key]);

    useEffect(() => { // write after the first read
        if (loaded) localStorage.setItem(key, JSON.stringify(value));
    }, [key, value, loaded]);

    return [value, setValue] as const;
}