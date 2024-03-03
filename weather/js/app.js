'use strict'
const apiKey = '99f0f9c4a043d176fbf5a2c63e1c2e38';

const btn = document.querySelector('button');
const search= document.querySelector('input');
const img = document.querySelector('img');
const city= document.querySelector('.city');
const desc= document.querySelector('.desc');
const humid = document.querySelector('.humid');
const speeds = document.querySelector('.speed');
const tempe =document.querySelector('.temp')

btn.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then(data => {
        const {name} =data;
        const {temp,humidity} = data.main;
        const {speed} =data.wind;
        const{description, icon} = data.weather[0];

        img.src= `https://openweathermap.org/img/wn/${icon}@2x.png`;
        city.innerHTML =`Weather in ${name}`;
        tempe.innerHTML=temp + '°C';
        humid.innerHTML= `Humidity: ${humidity}%`;
        speeds.innerHTML= `Wind speed: ${speed}km/h `;
        desc.innerHTML = Description;


    })
})