const resP = document.querySelector('#result'); // text

const resBtn = document.querySelector('#getData'); // button

const resId = document.querySelector('#adviceid'); // id

// generate advice by clicking the button

resBtn.addEventListener('click', () => {
    getAdvice();
}); 

// generate advice on page reload

window.onload = () => {
    getAdvice();
}

// taking the values 

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(Response => {
        return Response.json(); 
    }).then(adviceData => {
        const adviceresult = adviceData.slip;
        resP.innerHTML = `"${adviceresult.advice}"`; // showing the advice in the screen 
        const advid = adviceData.slip;
        resId.innerHTML = `Advice # ${advid.id}` // showing the advice id 
    })
}