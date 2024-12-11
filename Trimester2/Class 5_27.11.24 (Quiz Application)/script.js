const correctAns = ['D', 'B', 'C', 'B', 'D'];
let questions = document.querySelectorAll('.question');
const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // const userAns = []
    // for (let i = 1; i <= 5; i++) {
    //     userAns.push(form[`q${i}`].value);
    // }

    // console.log(userAns);    

    let score = 0;
    correctAns.forEach(function(answer, index){
        const userAnswer = form[`q${index + 1}`].value;
        if (userAnswer === answer){
            score++;
            questions[index].classList.add('correct');
        } else {
            questions[index].classList.add('wrong');
        }
    });

    result.classList.remove('hide');
    result.querySelector('p').innerText = `You scored ${score}/5`;
})
