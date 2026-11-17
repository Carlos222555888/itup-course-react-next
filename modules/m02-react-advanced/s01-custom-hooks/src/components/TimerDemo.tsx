//Create components/TimerDemo.tsx, add "use client"; at the top (the component
//uses hooks), and import useTimer from your hook. The hook file doesn't need
//"use client";.
//Call useTimer three times: a count-up timer from 0, a countdown timer from 60 with an
//onComplete that alerts "Time's up!", and a paused count-up timer starting at 10.
//For each timer, render its current time, a toggle/start/pause button, and a reset button,
//wired to the hook's returned functions.

"use client";
import { useTimer } from '../hooks/useTimer';

export default function TimerDemo() {
    const countUpTimer = useTimer(0);
    const countDownTimer = useTimer(60, { direction: 'down', onComplete: () => alert("Time's up!") });
    const pausedCountUpTimer = useTimer(10, { startPaused: true });

    return (
        <div>
            <div>
                <h2>Count Up Timer</h2>
                <p>{countUpTimer.time}</p>
                <button onClick={countUpTimer.toggle}>{countUpTimer.isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={countUpTimer.reset}>Reset</button>
            </div>
            <div>
                <h2>Count Down Timer</h2>
                <p>{countDownTimer.time}</p>
                <button onClick={countDownTimer.toggle}>{countDownTimer.isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={countDownTimer.reset}>Reset</button>
            </div>
            <div>
                <h2>Paused Count Up Timer</h2>
                <p>{pausedCountUpTimer.time}</p>
                <button onClick={pausedCountUpTimer.toggle}>{pausedCountUpTimer.isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={pausedCountUpTimer.reset}>Reset</button>
            </div>
        </div>
    );
}