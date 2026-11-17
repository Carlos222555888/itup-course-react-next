//Render <TimerDemo /> in your app's entry point.
//Confirm the count-up timer increments every second and can be paused/resumed/reset.
//Confirm the countdown timer decrements, stops at 0, and triggers the "Time's up!"
//alert.
//Confirm the paused timer does not start automatically, and that clicking "Start" begins it.
//(Optional) Try composing useTimer inside another hook, e.g. a useTimerWithSound
//that plays an audio file via onComplete

import TimerDemo from "../components/TimerDemo";

export default function Home() {
  return (
    <TimerDemo />
  );
}
