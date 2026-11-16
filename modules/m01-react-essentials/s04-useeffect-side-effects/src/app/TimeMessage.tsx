import { useState, useEffect } from 'react'

interface TimerMessageProps {
    duration?: number
    message?: string
}

export function TimerMessage({duration = 5,message = "Time's up!"}: TimerMessageProps) {
const [timeLeft, setTimeLeft] = useState<number>(duration)
const [isFinished, setIsFinished] = useState<boolean>(false)
const [isCancelled, setIsCancelled] = useState<boolean>(false)

// Add your useEffect logic here
useEffect(() => {
    if (timeLeft === 0) {
        setIsFinished(true)
    }
    if (isCancelled) {
        return  
    }
    const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(timer)
}, [timeLeft, isCancelled])
const handleCancel = (): void => {
    // Cancel logic here
    setIsCancelled(true)
}
const handleReset = (): void => {
    // Reset logic here
    setTimeLeft(duration)
    setIsFinished(false)
    setIsCancelled(false)
}
return (
    <div className="timer-message">
        {!isFinished && !isCancelled && (
        <div>
            <h3>Message in: {timeLeft} seconds</h3>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleReset}>Reset</button>
        </div>
        )}
        {isFinished && <h2>{message}</h2>}
        {isCancelled && <h2>Timer cancelled</h2>}
    </div>
)
}