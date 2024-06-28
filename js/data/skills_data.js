class Skill {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

/**
 * A list of all my skills.
 */
const skills = [
    new Skill(
        "Front-end web dev",
        "I've used HTML, CSS and JavaScript (as I'm sure you can tell from this website). I also used the Python web framework Django during my internship at The One Solution in Mysore, India."
    ),
    new Skill(
        "Python programming",
        "I've used Python to make GUIs, websites and games. Because of its wide range of uses, it's definitely my favourite programming language."
    ),
    new Skill(
        "Java programming",
        "I learned Java as part of my studies at UQ and used it to make a maze game."
    ),
    new Skill(
        "Databases and SQL",
        "I have experience with creating and using databases from tutoring the course Introduction to Information Systems at UQ. I've used SQLite database with the web framework Django."
    ),
    new Skill(
        "C programming",
        "I've learned how to use C to program microchips and hardware."
    ),
];

export { skills };