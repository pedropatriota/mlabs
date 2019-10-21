function fill_0(n) {
  if (n < "10") {
    n = `0${n}`;
  } else {
    n = n;
  }
  return n;
}

function datetime() {
  setInterval(() => {
    const today = new Date();
    let date = `${fill_0(today.getDate())}/${fill_0(
      today.getMonth() + 1
    )}/${today.getFullYear()} ${fill_0(today.getHours())}:${fill_0(
      today.getMinutes()
    )}:${fill_0(today.getSeconds())}`;
    document.querySelector(".time").innerHTML = date;
  }, 1000);
}

datetime();

