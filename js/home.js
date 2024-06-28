import { experienceTypes, experience } from "./data/experience_data.js";
import { skills } from "./data/skills_data.js";

/**
 * Gets a random number between 0 (inclusive) and the max (exclusive).
 * @param {Number} max The maximum value (exclusive).
 * @returns A random number between 0 (inclusive) and the max (exclusive).
 */
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const homeTaglines = [
    "and I engineer software that will blow your mind.",
    "and I'm engineering tomorrow's software.",
    "I don't just make software – I make solutions."
];

document.addEventListener("DOMContentLoaded", function () {
    const homeTagline = document.getElementById("home-tagline");
    // Carousel
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");
    const experienceList = document.getElementById("experience-list");
    // Form elements
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const button = document.getElementById("send-button");
    // Skills
    const skillsList = document.getElementById("skills-list");

    // JavaScript interaction #1: carousel to see projects

    // Set up scroll buttons
    const scrollAmount = 200;
    scrollLeftBtn.addEventListener("click", function () {
        experienceList.scrollLeft -= scrollAmount;
    });
    scrollRightBtn.addEventListener("click", function () {
        experienceList.scrollLeft += scrollAmount;
    });
    // Add projects to list
    experience.forEach(experienceItem => {
        // Create elements
        const experienceDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = `images/${experienceItem.img}`;
        img.alt = experienceItem.name;
        const desc = document.createElement("p");
        desc.innerHTML = experienceItem.name;
        // Add to page
        experienceDiv.appendChild(img);
        experienceDiv.appendChild(desc);
        experienceList.appendChild(experienceDiv);
    });

    // JavaScript interaction #2: form validation

    /**
     * Validates an email address. Sourced from [2]
     * @param {String} email The email to validate.
     * @returns Whether the email is valid.
     */
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Called when the form is submitted.
     */
    function submitForm() {
        if (validateEmail(emailField.value)) {
            // Valid email
            alert(`Thank you for your message, ${nameField.value}!`);
        } else {
            // Invalid email
            alert("Please enter a valid email address.");
            return true;
        }
    }

    button.addEventListener("click", submitForm)

    // Randomise home tagline
    homeTagline.innerHTML = homeTaglines[randomInt(homeTaglines.length)];

    // Add skills
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.innerHTML = skill.name;
        skillsList.appendChild(skillItem);
    });

});
