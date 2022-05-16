import React, { Fragment, useState, useEffect, useCallback } from 'react';

function Solution() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isPause, setIsPause] = useState(false);

  useEffect(()=>{
    let myInterval = setInterval(() => {
            if(isPause) {
              clearInterval(myInterval);
            } else {
              if (sec > 0) {
                setSec(sec - 1);
              }
              if (sec === 0) {
                  if (min === 0) {
                      clearInterval(myInterval)
                  } else {
                      setMin(min - 1);
                      setSec(59);
                  }
              } 
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    }, [isPause, sec, min]);

  const handleStart = () => {
    let mins = document.getElementById("min").value;
    let secs = document.getElementById("sec").value;
    setSec(secs%60);
    setMin(parseInt(mins) + parseInt(secs/60));
    handleTimer();
  }

  const handlePorR = () => {
    if(!isPause) {
      setIsPause(true);
    } else {
      setIsPause(false);
    }
  }

  const handleReset = () => {
    setMin(0);
    setSec(0);
  }
  
  return (
    <Fragment>
      <label>
        <input id="min" type="number" />
        Minutes
      </label>
      <label>
        <input id="sec" type="number" />
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePorR}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <h1 data-testid="running-clock">{min < 10 ? `0${min}` : min}:{sec < 10 ?  `0${sec}` : sec}</h1>
    </Fragment>
  );
}

export default Solution;
