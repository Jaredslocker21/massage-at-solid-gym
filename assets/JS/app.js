document.addEventListener("mousemove", (event) => {
    const circle = document.querySelector('.circle');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the percentage position of the mouse within the viewport
    const mouseX = event.clientX / windowWidth;
    const mouseY = event.clientY / windowHeight;

    // Define the movement range for the circle
    const maxX = 20; // Horizontal movement in pixels
    const maxY = 20; // Vertical movement in pixels

    // Calculate offset based on mouse position
    const offsetX = (mouseX - 0.5) * maxX;
    const offsetY = (mouseY - 0.5) * maxY;

    // Apply transform
    circle.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
});
