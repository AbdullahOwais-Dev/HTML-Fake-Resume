document.addEventListener("mousemove", function (event) {
    const light = document.getElementById("light");
    light.style.top = `${event.pageY - 250}px`;
    light.style.left = `${event.pageX - 300}px`;
});

document.addEventListener("touchmove", function (event) {
    const light = document.getElementById("light");
    const touch = event.touches[0]; // Get the first touch point
    light.style.top = `${touch.pageY - 250}px`;
    light.style.left = `${touch.pageX - 300}px`;
});
