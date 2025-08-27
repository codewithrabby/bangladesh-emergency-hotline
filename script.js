    // Heart Increasing Functionality...

    const heartCountElement = document.getElementById("heart-count");
    const cardHearts = document.querySelectorAll(".card-heart");

    let heartCount = 0;

    for (const heart of cardHearts) {
        heart.addEventListener("click", () => {
            heartCount++;
            heartCountElement.textContent = heartCount;
        });
    }













