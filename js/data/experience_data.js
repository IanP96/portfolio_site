class Experience {
    constructor(name, types, desc, img) {
        this.name = name;
        this.types = types;
        this.desc = desc;
        this.img = img;
    }
}

const experienceTypes = ["Python", "Web", "Databases", "C", "Programming"];

// Some experience descriptions sourced from [1]

const experience = [
    new Experience(
        "Web Development with Django",
        ["Python", "Web", "Databases", "Programming"],
        "I completed a web development internship at The One Solution in Mysore, where I used HTML, CSS, SQLite and Django (a Python web framework) to create a full-stack website. This experience awakened my passion for web development and even inspired me to create my own website.",
        "tos_logo.jpg" // Image from [3]
    ),
    new Experience(
        "Casual Demonstrator @ UQ",
        ["Databases"],
        "I am currently a casual demonstrator for INFS1200 (Introduction to Electrical Systems) at the University of Queensland, which involves duties such as directing classes, responding to student queries and working together with other members of the teaching team. I have greatly enjoyed this experience as I love helping others and I think relational databases are pretty cool.",
        "uq_logo.png" // Image from [4]
    ),
    new Experience(
        "Microchip Programming with C",
        ["C", "Programming"],
        "I made a Battleship game using the ATmega324A microchip as part of my studies at UQ, demonstrating my hardware and software proficiency.",
        "csse2010.jpeg"
    ),
    new Experience(
        "This website",
        ["Web", "Programming"],
        "I made this website using HTML, CSS and JavaScript as part of my studies at UQ. You want proof of my skills – here it is!",
        "favicon.png"
    ),
    new Experience(
        "Course Experiences",
        ["Python", "Web", "Databases", "Programming"],
        "Course Experiences is a site where students can find the best courses to take at UQ. It's still in beta – but not for long!",
        "uqce.ico"
    ),
];

export { experienceTypes, experience };