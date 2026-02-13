// © github.com/papichans

// Preloader
let messagePhase = 1;
const preloader = document.querySelector('.preloader');
const button_next = document.querySelector('.next')
const message = document.querySelector('.message')

button_next.addEventListener('click', () => {
    messagePhase++;
    if (messagePhase == 2) {
        message.classList.add('fade');
        setTimeout(() => {
            message.textContent = "may itatanong sana ako sayo...."
            message.classList.remove('fade');
        }, 200); 
    }
    if (messagePhase == 3 ) {
        setTimeout(() => {
            preloader.style.opacity = 0;
        }, 100)
        setTimeout(() => {
            preloader.style.display = 'none';
        },  600)
    }
})

// No button hover

const button_area = document.querySelector('.buttons-area');
const button_no = document.querySelector('.answer-no');
const button_yes = document.querySelector('.answer-yes');
const image = document.querySelector('.content-image');
const question = document.querySelector('.question');
let imagePhase = 1;

function changeImage() {
    image.classList.add('fade');
    if (imagePhase == 1) {
        question.textContent = "WHATTTTTTTT?";
    }
    else if (imagePhase == 2) {
        question.textContent = "Mommy yes kana please - chia <3";
    }
    else if (imagePhase == 3) {
        question.textContent = "No mommy papabili ako sayo marami toys pag no";
    }
    else if (imagePhase == 4) {
        question.textContent = "Please mommy hehehe yes na";
    }
    else if (imagePhase == 5) {
        question.textContent = "Di pwede mommy";
    }
    else if (imagePhase == 6) {
        question.textContent = "404 not found,Please click yes to continue ' ";
    }
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-2.jpg';
        image.classList.remove('fade');
    }, 180); 
}

function backtoImage() {
    image.classList.add('fade');
    setTimeout(() => {
        if (imagePhase == 1) {
            image.src = 'assets/images/content-pics/img-1.jpg';
            question.textContent = "Will you be my valentine?";
        }
        else if (imagePhase == 2) {
            image.src = 'assets/images/content-pics/img-3.jpg';
            question.textContent = "Just click yes please...";
        }
        else if (imagePhase == 3) {
            image.src = 'assets/images/content-pics/img-4.jpg';
            question.textContent = "Can't take no for an answer :p";
        }
        else if (imagePhase == 4) {
            image.src = 'assets/images/content-pics/img-5.jpg';
            question.textContent = "Click yes please :)";
        }
        else if (imagePhase == 5) {
            image.src = 'assets/images/content-pics/img-6.jpg';
            question.textContent = "Please say yes mommy :)";
        }
        else if (imagePhase == 6) {
            image.src = 'assets/images/content-pics/img-7.jpg';
            question.textContent = "404 not found, Please click yes to continue";
        }
        image.classList.remove('fade');
    }, 180); 
}

button_no.addEventListener('mouseover', () => {
    changeImage();
});

button_no.addEventListener('mouseout', () => {
    backtoImage();
});

// Next Phase

button_no.addEventListener('click', () => {
    imagePhase++;
    if (imagePhase == 6) {
        button_no.disabled = true;
        button_no.style.opacity = 0.5;
    }
});

// She said yes

button_yes.addEventListener('click', () =>{
    image.classList.add('fade');
    button_area.innerHTML = '';
    button_area.textContent = "Okay bukas g tayo date night bruh at 2pm sa acqua ;) See you <3";
    question.textContent = "Thank you Mommy - daddy and chia <3"
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-8.jpg';
        image.classList.remove('fade');
    }, 180 )
});