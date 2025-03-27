let words = document.querySelectorAll(".word");
words. forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
         setTimeout(()=>{
            letter.className = "letter out";
         },i *80);
   });
   nextWord.style.opacity="1";
   Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
 
changeText();
setInterval(changeText,3500)

document.addEventListener("DOMContentLoaded", function () {
    var titles = document.querySelectorAll('.service-Title');
    var serviceDescriptions = document.querySelectorAll('.service_description'); // Ensure this matches your HTML class
    var icons = document.querySelectorAll('.ri-add-fill');
    var headings = document.querySelectorAll('.service-Title h2');

    titles.forEach((title, index) => {
        title.addEventListener('click', () => {
            var isActive = serviceDescriptions[index].classList.contains('ActiveDesc');

            // Remove active classes from all elements
            serviceDescriptions.forEach((desc) => {
                desc.classList.remove('ActiveDesc');
            });
            icons.forEach((icon) => {
                icon.classList.remove('ri-subtract-line');
            });
            headings.forEach((heading) => {
                heading.classList.remove('ActiveHeading');
            });

            // Toggle active class only if it wasn't already active
            if (!isActive) {
                serviceDescriptions[index].classList.add('ActiveDesc');
                icons[index].classList.toggle('ri-subtract-line');
                headings[index].classList.toggle('ActiveHeading');
            }
        });
    });
});
