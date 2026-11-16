"use client"

import { TimerMessage } from "./TimeMessage";

export default function Home() {
  return (
    <TimerMessage duration={10} message="Countdown finished!" />
  );
}
