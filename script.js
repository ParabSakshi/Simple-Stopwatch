let centiseconds = 0;
    let seconds = 0;
    let minutes = 0;
    // let hours = 0;
    let timer;
    let running = false;

    function updateDisplay() {
    //   let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      let c = centiseconds < 10 ? "0" + centiseconds : centiseconds;
      document.getElementById("display").innerText = `${m}:${s}.${c}`;
    }

    function start() {
      if (!running) {
        running = true;
        timer = setInterval(() => {
          centiseconds++;
          if (centiseconds === 100) {
            centiseconds = 0;
            seconds++;
          }
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
        //   if (minutes === 60) {
        //     minutes = 0;
        //     hours++;
        //   }
          updateDisplay();
        }, 10); // 10ms = 0.01 second
      }
    }

    function stop() {
      clearInterval(timer);
      running = false;
    }

    function reset() {
      stop();
      centiseconds = 0;
      seconds = 0;
      minutes = 0;
    //   hours = 0;
      updateDisplay();
    }