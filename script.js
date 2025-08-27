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


    // Call & Clear Button Functionality....

    const coinCountElement = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountElement.innerText);
    const callButtons = document.querySelectorAll(".call-btn");
    const callHistoryContainer = document.getElementById("callHistory");

    for (const button of callButtons) {
        button.addEventListener("click", function() {
            if (coinCount >= 20) {
                coinCount -= 20;
                coinCountElement.innerText = coinCount;

                const card = button.closest(".card");
                const serviceSubtitle = card.querySelector(".subtitle").innerText;
                const serviceNumber = card.querySelector(".contact-number").innerText;

                alert(`Calling ${serviceSubtitle} - ${serviceNumber}`);

                const now = new Date();
                const formattedTime = now.toLocaleString(); // "8/28/2025, 1:10:45 PM"
                const historyItem = document.createElement("div");
                historyItem.className = "bg-white px-4 py-3 rounded-lg shadow flex justify-between items-center";

                const leftPart = document.createElement("div");
                leftPart.innerHTML = `
                    <span class="font-bold block">${serviceSubtitle}</span>
                    <span class="font-semibold block">${serviceNumber}</span>
                `;


                const rightPart = document.createElement("div");
                rightPart.className = "text-gray-500 text-sm text-right";
                rightPart.innerText = formattedTime;

                historyItem.appendChild(leftPart);
                historyItem.appendChild(rightPart);

                callHistoryContainer.prepend(historyItem);

            } else {
                alert("You don’t have enough coins!");
            }
        });
    }

    // Clear Call History button
    const clearBtn = document.querySelector("#callHistory").previousElementSibling.querySelector("button");
    clearBtn.addEventListener("click", () => {
        callHistoryContainer.innerHTML = "";
    });











