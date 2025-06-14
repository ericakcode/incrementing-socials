const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  counter.innerText = "0";

  const updateCounter = function () {
    const target = Number(counter.getAttribute("data-target"));
    const c = Number(counter.innerText);

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 2);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
