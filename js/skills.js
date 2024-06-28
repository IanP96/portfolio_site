import { skills } from "./data/skills_data.js";

document.addEventListener("DOMContentLoaded", function () {

    const skillsList = document.getElementById("skills-list");

    // JavaScript interaction #4: Show description of skills on click

    skills.forEach(skill => {
        // Create div, skill title and description
        const skillDiv = document.createElement("div");
        skillDiv.className = "desc-hidden blue-on-hover";
        const title = document.createElement("h3");
        title.innerHTML = skill.name;
        const desc = document.createElement("p");
        desc.innerHTML = skill.desc;

        // Event handler to show/hide description
        skillDiv.addEventListener("click", function () {
            if (skillDiv.classList.contains("desc-hidden")) {
                skillDiv.classList.replace("desc-hidden", "desc-visible");
            } else {
                skillDiv.classList.replace("desc-visible", "desc-hidden");
            }
        });
        
        // Put elements in document
        skillDiv.appendChild(title);
        skillDiv.appendChild(desc);
        skillsList.appendChild(skillDiv);
    });
    
});
