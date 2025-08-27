    // Heart Increasing Functionality...

    const heartCountElement = document.getElementById("heart-count");
    const cardHearts = document.querySelectorAll(".card-heart");

    let heartCount = 0;

    for (const heart of cardHearts) {
    heart.addEventListener("click", function () {
        heartCount++;
        heartCountElement.innerText = heartCount;
    });
    }

    // Coin Functionality...

    const coinCountElement = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountElement.innerText);
    const callButtons = document.querySelectorAll(".call-btn");

    for (const button of callButtons) {
        button.addEventListener("click", function(){
            if (coinCount >= 20) {
                coinCount -= 20;
                coinCountElement.innerText = coinCount;

                const card = button.closest(".card");
                const serviceSubtitle = card.querySelector(".subtitle").innerText;
                const serviceNumber = card.querySelector(".contact-number").innerText;

                alert(`Calling ${serviceSubtitle} - ${serviceNumber}`);
            } else {
                alert("You don’t have enough coins!");
            }
        });
    }






























































    // Clear Button Functionality.....

    // clearHistoryBtn.addEventListener("click", function () {
    //     callHistoryContainer.innerHTML = "";
    // });





    // Copy Button Functionality......

    const copyButtons = document.querySelectorAll('.copy-btn');
    const copyCounterBtn = document.getElementById('copy-counter-btn');
    const copyCountSpan = copyCounterBtn.previousElementSibling; //
    let copyCount = parseInt(copyCountSpan.innerText);

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const contactNumber = card.querySelector('.contact-number').innerText;

            navigator.clipboard.writeText(contactNumber).then(() => {

                alert(`Contact number ${contactNumber} copied!`);

                copyCount++;
                copyCountSpan.innerText = copyCount;
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });




