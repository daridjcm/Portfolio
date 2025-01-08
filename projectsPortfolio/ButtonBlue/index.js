// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
};

// 1. Get elements through ID and transform in variables
let count = 0;
let myElement = document.getElementById('buttonClick');
let myElement2 = document.getElementById('myElement2');
let myElement3 = document.getElementById('myElement3');
let myElement4 = document.getElementById('myElement4');
let urlImg = 'https://i.pinimg.com/originals/46/7d/35/467d353f7e2d43563ce13fddbb213709.gif'; // URL of the image
let urlImg2 = 'https://i.pinimg.com/originals/09/e3/fa/09e3faf561e5aa96e8ee8c725f38741c.gif'; // URL of the image
let urlImg3 = 'https://i.pinimg.com/originals/61/c2/05/61c205a03a03b0cf4016fd797f7f5d70.gif'; // URL of the image

// 2. Add a event listener so that the function is executed when the button is clicked
myElement.addEventListener('click', function () {
    increment();
    }
);

// 3. Function called
function increment() {
    count++;
    myElement2.innerText = count + (count === 1 ? ' time' : ' times');
    if (count > 0) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
    } if (count >= 50) {
        myElement3.textContent = 'Congrulations! You have reached the time at number 50.';
    } if (count > 51) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
    } if (count >= 100) {
        myElement3.textContent = 'Congrulations! You have reached the time at number 100.';
        myElement4.src = urlImg;
    } if (count > 101) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
        myElement4.style.display = 'none'; // Hidden image
    } if (count >= 150) {
        myElement3.textContent = 'Congratulations. You clicked over 150 clicks.';
    } if (count > 151) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
    } if (count >= 200) {
        myElement3.textContent = "You are stupid. You're still here clicking like a big asshole that you are, we appreciate you for that. Keep it up!";
    } if (count > 200) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
    } if (count >= 300) {
        myElement3.textContent = 'Congrulations! Stupid. You have reached the click at number 300.';
        myElement4.style.display = 'block'; // Show image
        myElement4.src = urlImg2;
    } if (count > 301) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
        myElement4.style.display = 'none'; // Hidden image
    } if (count >= 400) {
        myElement3.textContent = 'Without words.';
        myElement4.style.display = 'block'; // Show image
        myElement4.src = urlImg3;
    } if (count > 401) {
        myElement3.textContent = `Numbers of clicks: ${count}`;
        myElement4.style.display = 'none'; // Hidden image
    } if (count >= 500) {
        alert('The website is out of memory, please refresh the page.');
    } else {
        setInterval(1000), count;
    };
};