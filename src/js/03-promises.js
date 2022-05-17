import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(`.form`),
  btn: document.querySelector(`button`),
  delayEl: document.querySelector(`input[name = "delay"]`),
  delayStepEl: document.querySelector(`input[name = "step"]`),
  amountEl: document.querySelector(`input[name = "amount"]`),

}

refs.btn.addEventListener(`click`, onCreatePromises);

//const amount = refs.amountEl.value;
function onCreatePromises() {
  
  //for(let i = 1; i < amount; i += 1){
    let delay = refs.delayEl.value;
    let position = 1;
          
    createPromise(position, delay); 

     //delay += refs.delayEl.value;
  //}
 
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({posision: position, delay: delay});
      } 
        reject({posision: position, delay: delay});
      
    }, delay);  
  });
 
 
promise.then(({posision: position, delay: delay}) => {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}).catch(({posision: position, delay: delay}) => {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
})
}
