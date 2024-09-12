  let stopb = document.getElementById('stopButton');
  let slowb = document.getElementById('slowButton');
  let gob = document.getElementById('goButton');
  let stopl = document.getElementById('stopLight');
  let slowl = document.getElementById('slowLight');
  let gol = document.getElementById('goLight');

 
  function reset() {
    stopl.style.backgroundColor = "black";
    slowl.style.backgroundColor = "black";
    gol.style.backgroundColor = "black";
  }

  function stop() {
    reset();
    stopl.style.backgroundColor = "red";
  }

  function slow() {
    reset();
    slowl.style.backgroundColor = "yellow";
  }

  function go() {
    reset();
    gol.style.backgroundColor = "green";
  }

  stopb.addEventListener('click', stop);
  slowb.addEventListener('click', slow);
  gob.addEventListener('click', go);