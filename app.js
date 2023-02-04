let arr = ["The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.",
    "Studying is not about time. It`s about effort.",
    "Life is not all about studying. But if you can`t even conquer this little part of life, then what else can you possibly do?",
    "Success only comes with self-management and determination.",
    "If you don`t walk today, you`ll have to run tomorrow.",
    "The level of education is in direct correlation with your salary.",
    "When today is over, it will never come back.",
    "Even now, your enemies are eagerly flipping through books.",
];

const quote = document.querySelector('.center p');
let flag = false;

function doRandomQuote(array) {
    try {
        let rand = Math.round(Math.random() * 8);
        quote.textContent = array[rand];
        console.log(array[rand]);
        if (!array[rand]) throw new Error('Нет такого элемента')
        else quote.textContent = array[rand];

        if (!flag) {
            quote.style = 'color: white';
            flag = true;
        } else {
            quote.style = 'color: red';
            flag = false;
        }

    } catch (err) {
        return err.message;
    }

}

setInterval(doRandomQuote, 3000, arr);