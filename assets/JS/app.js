document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector('.circle');
    const circleContainer = document.querySelector('.circle-container');

    // Function to handle the mouse movement effect
    function applyMouseMovementEffect(event) {
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

        // Apply the transform to the circle
        circle.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    }

    // Function to handle screen size and update the circle's behavior
    function handleResize() {
        if (window.innerWidth <= 400) {
            // On small screens (<= 400px):
            circleContainer.style.display = "none"; // Keep the circle visible
            circle.style.transform = 'none'; // Reset the circle's transform (stop the mouse effect)
            console.log("Mobile view - Mouse movement effect disabled.");
        } else {
            // On larger screens:
            circleContainer.style.display = "flex"; // Show the circle container
            document.addEventListener("mousemove", applyMouseMovementEffect); // Enable mousemove for 3D effect
            console.log("Desktop view - Mouse movement effect enabled.");
        }
    }

    // Initialize by checking the screen size when the page loads
    handleResize();

    // Check again if the screen size changes (on window resize)
    window.addEventListener("resize", handleResize);
});
