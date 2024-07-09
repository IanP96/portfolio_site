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

    // Randomise home tagline
    homeTagline.innerHTML = homeTaglines[randomInt(homeTaglines.length)];

    // Add skills
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.innerHTML = skill.name;
        skillsList.appendChild(skillItem);
    });

});
