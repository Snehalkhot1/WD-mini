// ===============================
// Programming Notes Hub Script
// ===============================


// Search Functionality

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title =
            card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(filter)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ===============================
// Save Notes Function
// ===============================

function addNote() {

    const title =
        document.getElementById("title").value;

    const noteText =
        document.getElementById("noteText").value;

    // Validation

    if (title.trim() === "" || noteText.trim() === "") {

        alert("Please fill all fields!");

        return;

    }

    // Create Note Object

    const note = {

        title: title,
        text: noteText

    };

    // Get Existing Notes

    let notes =
        JSON.parse(localStorage.getItem("notes")) || [];

    // Add New Note

    notes.push(note);

    // Save Back to LocalStorage

    localStorage.setItem("notes", JSON.stringify(notes));

    // Display Notes Again

    displayNotes();

    // Clear Inputs

    document.getElementById("title").value = "";

    document.getElementById("noteText").value = "";

}


// ===============================
// Display Notes
// ===============================

function displayNotes() {

    const notesContainer =
        document.getElementById("notesContainer");

    notesContainer.innerHTML = "";

    let notes =
        JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {

        notesContainer.innerHTML += `

        <div class="note">

            <h3>${note.title}</h3>

            <p>${note.text}</p>

            <button class="delete-btn"
                onclick="deleteNote(${index})">

                Delete

            </button>

        </div>

        `;

    });

}


// ===============================
// Delete Notes
// ===============================

function deleteNote(index) {

    let notes =
        JSON.parse(localStorage.getItem("notes")) || [];

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();

}


// ===============================
// Dark Glow Effect on Mouse Move
// ===============================

document.addEventListener("mousemove", function(e) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);

        card.style.setProperty("--yPos", `${y}px`);

    });

});


// ===============================
// Load Notes on Page Load
// ===============================

displayNotes();


// ===============================
// Welcome Alert
// ===============================

window.onload = function() {

    console.log("Programming Notes Hub Loaded Successfully!");

};


// ===============================
// Smooth Scroll Active Menu
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", function() {

        menuLinks.forEach(nav => {

            nav.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ===============================
// Auto Typing Effect
// ===============================

const text =
    "Learn Programming Languages Easily 🚀";

let index = 0;

function typingEffect() {

    const heading =
        document.querySelector(".hero-text p");

    if (index < text.length) {

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 50);

    }

}

// Start Typing Animation

document.querySelector(".hero-text p").innerHTML = "";

typingEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

window.addEventListener("scroll", revealCards);

function revealCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const windowHeight = window.innerHeight;

        const cardTop =
            card.getBoundingClientRect().top;

        const revealPoint = 100;

        if (cardTop < windowHeight - revealPoint) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

}


// Initial Card Animation Setup

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.6s ease";

});

revealCards();