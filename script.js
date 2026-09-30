function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


function showMessage(courseName) {

    alert(
        "You selected " +
        courseName +
        ". Kiran Academy will help you start your learning journey!"
    );
}


function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );

    event.target.reset();
}