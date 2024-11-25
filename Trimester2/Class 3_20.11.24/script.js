const form = document.querySelector('.feedback-form')


let usernameRegex = /^[a-z0-9]{3,12}$/;
let feedbackRegx = /^.{20,50}$/;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(form.username.value);
    // console.log(form.feedback.value);


    let usernameValid = usernameRegex.test((form.username.value));  
    let feedbackValid = feedbackRegx.test((form.feedback.value));


    let para = document.querySelector('p')
    if(usernameValid && feedbackValid){
        para.textContent = 'Valid!'
    } else {
        para.textContent = 'Invalid!'
    }
         
    // form.reset();
})
