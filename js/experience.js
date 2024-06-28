import { experienceTypes, experience } from "./data/experience_data.js";

document.addEventListener("DOMContentLoaded", function () {

    // Get DOM elements
    const experienceFilters = document.getElementById("experience-filters");
    const experienceList = document.getElementById("experience");

    const see_all = "× See all";

    // JavaScript interaction #3: filter list of projects/work experience using buttons

    /**
     * Which experience type should be shown, or "" to show all
     */
    var activeFilter;

    /**
     * All filter buttons, including the see all button
     */
    const buttons = [];

    /**
     * Updates the experience list based on which filters are active
     */
    function updateExperienceList() {

        // Clear current list
        experienceList.innerHTML = ""

        // Get new experience list based on filter
        var filteredExperience;
        if (activeFilter === "") {
            // No active filter
            filteredExperience = [...experience];
            buttons.forEach(button => {
                if (button.innerHTML === see_all) {
                    button.className = "disabled";
                } else {
                    button.className = "blue-on-hover";
                }
            });
        } else {
            // Filter active
            filteredExperience = [];
            experience.forEach(experienceItem => {
                // Adds experience items that fit the active filter
                if (experienceItem.types.includes(activeFilter)) {
                    filteredExperience.push(experienceItem);
                }
            });
            buttons.forEach((button) => {
                if (button.innerHTML === see_all) {
                    button.className = "blue-on-hover";
                } else if (button.innerHTML === activeFilter) {
                    button.className = "selected";
                } else {
                    button.className = "disabled";
                }
            });
        }

        // Update document
        filteredExperience.forEach((experienceItem) => {
            const experienceDiv = document.createElement("div");
            const title = document.createElement("h3");
            title.innerHTML = experienceItem.name;
            const desc = document.createElement("p");
            desc.innerHTML = experienceItem.desc;

            experienceDiv.appendChild(title);
            experienceDiv.appendChild(desc);
            experienceList.appendChild(experienceDiv);
        });

    }

    /**
     * Updates the current filter and refreshes the experience list accordingly.
     * @param {String} newFilter The new filter, or "" to clear the filter.
     */
    function updateFilter(newFilter) {
        activeFilter = newFilter;
        updateExperienceList();
    }

    experienceTypes.forEach(experienceType => {
        const button = document.createElement("button");
        button.innerHTML = experienceType;
        button.addEventListener("click", function () {
            updateFilter(experienceType);
        });
        experienceFilters.appendChild(button);

        buttons.push(button);
    });

    const seeAllButton = document.createElement("button");
    seeAllButton.innerHTML = see_all;
    seeAllButton.addEventListener("click", function () {
        updateFilter("");
    });
    experienceFilters.appendChild(seeAllButton);

    buttons.push(seeAllButton);

    updateFilter("");

});
