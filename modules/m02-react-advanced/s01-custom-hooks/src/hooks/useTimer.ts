import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTimerOptions {
    direction?: 'up' | 'down';
    interval?: number;
    startPaused?: boolean;
    onComplete?: () => void;
}

function useTimer(initialTime: number = 0, options: UseTimerOptions = {}) {
    const {
        direction = 'up',
        interval = 1000,
        startPaused = false,
        onComplete
    }   = options;

// TODO: state for time and isRunning
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(!startPaused);
// TODO: refs for the interval id and the initial time
    // Add an intervalRef (useRef<NodeJS.Timeout | null>(null)) to hold the interval
    // id between renders without causing re-renders.
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const initialTimeRef = useRef(initialTime);
// TODO: effect to sync time when initialTime changes
    // Add a useEffect that runs when initialTime changes, updates
    // initialTimeRef.current, and resets time to the new initialTime.
    useEffect(() => {
        setTime(initialTime);
        initialTimeRef.current = initialTime;       
    }, [initialTime]);
// TODO: main timer effect (setInterval / clearInterval)
    // Add a useEffect that depends on isRunning, direction, interval, and
    // onComplete
    // When isRunning is true, start a setInterval that updates time every interval ms -
    // incrementing for direction: 'up', decrementing for direction: 'down'.
    // When counting down and the new time reaches 0, stop the timer
    // (setIsRunning(false)), call onComplete?.(), and clamp the value at 0.
    // When isRunning is false, clear any existing interval.
    // Return a cleanup function from the effect that clears the interval - this covers both
    // unmount and dependency changes.
    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setTime(prevTime => {
                const newTime = direction === 'up' ? prevTime + 1 : prevTime - 1;
                if (direction === 'down' && newTime <= 0) {
                    clearInterval(intervalRef.current!);
                    setIsRunning(false);
                    onComplete?.();
                    return 0;
                }
                console.log(newTime);
                return newTime;
            });
        }, interval);

        return () => clearInterval(intervalRef.current!);
    }, [isRunning, direction, interval, onComplete]);


// TODO: start, pause, resume, toggle, reset callbacks
    //Wrap start, pause, resume, and toggle in useCallback, each setting isRunning
    //appropriately (toggle flips the previous value).
    //Wrap reset in useCallback: restore time from initialTimeRef.current and set
    //isRunning based on startPaused.
    //Return { time, isRunning, start, pause, resume, reset, toggle } from the
    //hook.
    const start = useCallback(() => setIsRunning(true), []);
    const pause = useCallback(() => setIsRunning(false), []);
    const resume = useCallback(() => setIsRunning(true), []);
    const toggle = useCallback(() => setIsRunning(prev => !prev), []);
    const reset = useCallback(() => {
        setTime(initialTimeRef.current);
        setIsRunning(!startPaused);
    }, [startPaused]);

    return {
        time,
        isRunning,
        start,
        pause,
        resume,
        reset,
        toggle
    };
}
export { useTimer };