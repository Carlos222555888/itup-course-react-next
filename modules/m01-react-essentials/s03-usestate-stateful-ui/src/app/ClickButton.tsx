"use client";

import {useState} from "react";


// Define types for the component
interface Settings {
    maxClicks: number;
    showHistory: boolean;
}
interface ClickEvent {
    timestamp: Date;
    count: number;
}
export function ClickTracker() {
    // 1. Basic counter
    const [count, setCount] = useState<number>(0);
    // 2. Color state
    const [buttonColor, setButtonColor] = useState<string>('blue');
    // 3. Settings object
    const [settings, setSettings] = useState<Settings>({
        maxClicks: 20,
        showHistory: false
    });
    // 4. Click history array
    const [history, setHistory] = useState<ClickEvent[]>([]);
    // Your handlers here
    const handleClick = () => {
        // Implement click logic
        if (count < settings.maxClicks) {
            setCount(count + 1);
            setHistory([...history, { timestamp: new Date(), count: count + 1 }]);
            if (count % 5 === 4) setButtonColor(buttonColor === 'blue' ? 'red' : 'blue');
        } else {
            alert("Maximum clicks reached!");
        }   
    };
    const handleReset = () => {
        // Reset everything
        setCount(0);
        setHistory([]);
        setSettings({
            maxClicks: 20,
            showHistory: false
        });      
    };
    return (
        <div className="click-tracker">
            <h2>Click Tracker</h2>
            <p>Clicks: {count}</p>
            <button style={{ backgroundColor: buttonColor, color: 'white' }} onClick={handleClick}>Click Me!</button>
            <p>Max Clicks: {settings.maxClicks}</p>
            <p>Show History: {settings.showHistory ? "Yes" : "No"}</p>  
            <p>Button Color: {buttonColor}</p>
            <button onClick={() => setButtonColor(buttonColor === 'blue' ? 'red' : 'blue')}>Toggle Button Color</button>    
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => setSettings({...settings, showHistory: !settings.showHistory})}>
                Toggle History
            </button>
            <button onClick={() => setSettings({...settings, maxClicks: settings.maxClicks + 1})}>
                Increase Max Clicks
            </button>
            <p>Click History:</p>
            {history.length === 0 && <p>No clicks yet.</p>}
            {settings.showHistory && (
                <ul>
                    {history.map((event, index) => (
                        <li key={index}>
                            {event.timestamp.toLocaleString()}: {event.count}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

