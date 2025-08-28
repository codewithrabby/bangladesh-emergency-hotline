1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById ব্যবহার করা হয় কোনো element-কে তার ইউনিক id দিয়ে খুঁজে বের করার জন্য।

getElementsByClassName ব্যবহার করা হয় একাধিক element বের করার জন্য যেগুলোর একই class থাকে।

querySelector ব্যবহার করলে CSS selector দিয়ে element খুঁজে পাওয়া যায়, তবে এটি শুধু প্রথম element-টাই রিটার্ন করে।

querySelector ব্যবহার করলে CSS selector দিয়ে element খুঁজে পাওয়া যায়, তবে এটি সবগুলো
element-ই রিটার্ন করে।


2. How do you **create and insert a new element into the DOM**?

Answer:
DOM এ নতুন element তৈরি করে বসানোর জন্য প্রথমে document.createElement() দিয়ে element বানাতে হয়। এরপর তার ভেতরে text বা অন্য element যোগ করা যায় innerText, innerHTML বা appendChild() ব্যবহার করে। সবশেষে সেই element-টাকে DOM এ বসাতে হয় appendChild() এর মাধ্যমে।


3. What is **Event Bubbling** and how does it work?

Answer:
Event Bubbling হলো, যেখানে কোনো element-এ event ঘটলে (যেমন click), সেটা আগে সেই element-এ কাজ করে, তারপর তার parent, তারপর grandparent হয়ে ধাপে ধাপে উপরের element-গুলোর দিকে যায়।


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
Event Delegation হলো একটি পদ্ধতি যেখানে parent element এর ওপর একটি event listener বসানো হয়, আর child element এ যেকোনো event সেই listener দিয়ে handle করা হয়।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
preventDefault() কোনো element-এর default behavior আটকায়। যেমন, link-এ click করলে page reload হয় বা form submit হয়। preventDefault() দিলে সেটা হবে না।

stopPropagation() event-এর bubbling বা capturing বন্ধ করে দেয়।