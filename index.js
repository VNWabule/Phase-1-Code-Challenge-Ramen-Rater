document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Gyukotsu Ramen Kosuke", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Ramen Jiro", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ichiraku Ramen", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 3, comment: "A bit too salty." },
    { id: 4, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 4, comment: "Great!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 5, comment: "The best!" }

 ];

 function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing content
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const newRamen = {
            name: form["name"].value,
            restaurant: form["restaurant"].value,
            image: form["image"].value,
            rating: form["rating"].value,
            comment: form["comment"].value
        };
        
        ramens.push(newRamen); // Add to array
        
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);
        
        form.reset(); // Clear form fields
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}