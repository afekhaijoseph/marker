const hamburger = document.querySelector('.nav-mobile');
const closeHamburger = document.querySelector('.nav-mobile-close');
const mobileNavItems = document.querySelector('.mobile');
const dropArrow = document.querySelectorAll('.drop-down');
const answers = document.querySelectorAll('.answer');
const inputField = document.querySelector('.update-input');
const submitButton = document.querySelector('.update-button');
const Form = document.querySelector('.update-form');
const messages = document.querySelector('.small-message');
const controller = document.querySelectorAll('.carousel-controller p');
const slider = document.querySelector('.slider');


hamburger.addEventListener('click', ()=>{
    mobileNavItems.style.display = 'block';
    hamburger.style.display = "none";
})

closeHamburger.addEventListener('click', ()=>{
    mobileNavItems.style.display = "none";
    hamburger.style.display = "block";
})

dropArrow.forEach(element => element.addEventListener('click', ()=>{
    if (element.className === 'drop-down'){
        element.src="images/icon-arrow-close.svg";
        element.className = "drop-up";
        answers.forEach(answer =>{
        if (element.parentElement.parentElement === answer.parentElement){
            answer.style.display = "block";
        }
    })
    }

    else{
        element.src = 'images/icon-arrow.svg';
        element.className = "drop-down";
        answers.forEach(answer =>{
            if (element.parentElement.parentElement === answer.parentElement){
                answer.style.display = "none";
            }
        })
    }
    
}))

Form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inputField.value === ''){
        messages.insertAdjacentHTML('beforeend', `<small> Email field can't be left empty </small>`);
        inputField.style.margin = '0';
        inputField.style.border = '2px solid hsl(0, 94%, 66%)';
        messages.classList.add('signup-error');
        // setTimeout(()=> {
        //     messages.parentElement.removeChild(messages);
        //     inputField.style.border = 'none';
        //     inputField.value = '';
        // } , 2000);
    }

    else{
        const email = inputField.value;
        if(email.includes('@') && email.includes('.com')){
            messages.insertAdjacentHTML('beforeend', `<small class="success"> submission successful </small>`)
            inputField.style.margin = '0';
            inputField.style.border = '2px solid hsl(134, 57%, 54%)';
            messages.classList.add('signup-success');
            setTimeout(()=> {
                messages.parentElement.removeChild(messages);
                inputField.style.border = 'none';
                inputField.value = '';
            } , 2000)
        }
        else{
            messages.insertAdjacentHTML('beforeend', `<small> Please input a valid email address</small>`);
            inputField.style.margin = '0';
            inputField.style.border = '2px solid hsl(0, 94%, 66%)';
            messages.classList.add('signup-error');
            setTimeout(()=> {
                messages.parentElement.removeChild(messages);
                inputField.style.border = 'none';
                inputField.value = '';
            } , 2000)
        }
       
        }
})

controller.forEach((indicator, index)=>{
    indicator.addEventListener('click', ()=>{
        document.querySelector('.selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = `translate(${index * -33.33}%)`;
    })
})

