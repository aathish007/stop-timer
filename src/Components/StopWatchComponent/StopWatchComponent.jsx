import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import './StopWatchComponent.css'

const StopWatchComponent = () => {
        const [time, setTime] = useState(0);
        const [isActive, setIsActive] = useState(false);
        const timerRef = useRef(null);
      
        const startTimer = () => {
          if (!isActive) {
            setIsActive(true);
            timerRef.current = setInterval(() => {
              setTime((prevTime) => prevTime + 1);
            }, 1000);
          }
        };
      
        const stopTimer = () => {
          if (isActive) {
            clearInterval(timerRef.current);
            setIsActive(false);
          }
        };
      
        const resetTimer = () => {
          clearInterval(timerRef.current);
          setIsActive(false);
          setTime(0);
        };
      
        const formatTime = (time) => {
          const getSeconds = `0${time % 60}`.slice(-2);
          const minutes = Math.floor(time / 60);
          const getMinutes = `0${minutes % 60}`.slice(-2);
          return `${getMinutes}:${getSeconds}`;
        };
        return (
          <div className="stopwatch-container">
          <h1>Stopwatch</h1>
          <div className="timer">
            <h2>Timer</h2>
            <p>{formatTime(time)}</p>
            <div className="buttons">
              <button className="start" onClick={startTimer}>Start</button>
              <button className="stop" onClick={stopTimer}>Stop</button>
              <button className="reset" onClick={resetTimer}>Reset</button>
            </div>
          </div>
        </div>
        )
      }

export default StopWatchComponent