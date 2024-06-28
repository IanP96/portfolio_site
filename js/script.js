document.addEventListener("DOMContentLoaded", function () {

    // Get DOM elements
    const navBar = document.querySelector("nav");
    const navDropdownButton = document.getElementById("nav-dropdown-btn");
    const navLinks = document.querySelector("nav li #nav-item");

    /**
     * Toggle whether the navbar is visible or hidden. Only has an effect on mobile.
     */
    function navDropdownClick() {
        if (navBar.className === "hidden") {
            navBar.className = "visible";
        } else {
            navBar.className = "hidden";
        }
    }

    // Wait for DOM to load before accessing elements to prevent errors
    navDropdownButton.addEventListener("click", navDropdownClick);
    
});
