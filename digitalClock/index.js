const clock = document.querySelector(".clock");

setInterval(() => {
  let date = new Date().toLocaleTimeString();

  //   console.log(hour, ":", minute, ":", seconds);

  clock.innerHTML = `<h1>${date} </h1>`;
}, 1000);
