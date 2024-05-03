let box = document.querySelector('.container');
let joke = document.querySelector('#jokes');

fetch('https://icanhazdadjoke.com/slack')
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        let jokey = res.attachments[0].text;
        // console.log(jokey);
        joke.innerHTML = `${jokey}`
    })
    .catch((err)=>{
        joke.innerHTML = `Error loading joke, error: ${err}`;
    })