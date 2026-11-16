import { useState, useEffect } from 'react'

interface TimerMessageProps {
    duration?: number
    message?: string
}

export function TimerMessage({duration = 5,message = "Time's up!"}: TimerMessageProps) {
const [timeLeft, setTimeLeft] = useState<number>(duration)
const [isFinished, setIsFinished] = useState<boolean>(false)
const [isCancelled, setIsCancelled] = useState<boolean>(false)
const [buttonColor, setButtonColor] = useState<string>('blue');

// Add your useEffect logic here
useEffect(() => {
    if (timeLeft === 0) {
        setIsFinished(true)
        console.log(`Time left B: ${timeLeft}`)
        console.log(`Is Finished B: ${isFinished}`)
        console.log(`Is Cancelled B: ${isCancelled}`)
        return
    }
    if (isCancelled) {
        console.log(`Time left C: ${timeLeft}`)
        console.log(`Is Finished C: ${isFinished}`)
        console.log(`Is Cancelled C: ${isCancelled}`)
        return  
    }
    const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1)
        setButtonColor(buttonColor === 'blue' ? 'red' : 'blue')
        console.log(`Time left A: ${timeLeft}`)
        console.log(`Is Finished A: ${isFinished}`)
        console.log(`Is Cancelled A: ${isCancelled}`)
    }, 1000)
    return () => clearTimeout(timer)
}, [timeLeft, isCancelled, isFinished])
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
            <h3 style={{ color: buttonColor }}>Message in: {timeLeft} seconds</h3>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleReset}>Reset</button>
        </div>
        )}
        {isFinished && <h2>{message}</h2>}
        {isCancelled && <h2>Timer cancelled</h2>}
    </div>
)
}