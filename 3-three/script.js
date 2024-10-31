const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx) =>{
    cup.addEventListener('click', () => hightlightCups(idx))
}) 

function hightlightCups(idx){
    if(smallCups[idx].classList.contains('full') && 
        (smallCups[idx].nextElementSibling === null || !smallCups[idx].nextElementSibling.classList.contains('full'))){

            idx --
        }

        smallCups.forEach((cup,idx2) =>{
            if(idx2 <= idx){
                cup.classList.add('full')
            } else{
                cup.classList.remove('full')
            }
        })

        updateBigCup()
}


function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height  = 0
    
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height  = `${fullCups / totalCups * 300}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    } 

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0

    } else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (240 * fullCups / 1000)}l`
    }
}


// ==============

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle') 

const days = ["sundays","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

toggle.addEventListener('click', (e)=>{
    const html = document.querySelector('html')

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'

    } else{
        html.classList.add('dark')
        e.target.innerHTML = 'White Mode'
    }
})

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minute = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12? 'PM' : 'AM'

    hourEl.style.transfrom = `translate(-50%, -100%) rotate(
    ${scale(hoursForClock, 0 , 11, 0 ,360)}deg)`
    minuteEl.style.transfrom =  `translate(-50%, -100%) rotate(
    ${scale(minute, 0 , 59, 0, 360)}deg)`
    secondEl.style.transfrom =  `translate(-50%, -100%) rotate(
    ${scale(seconds, 0 , 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock} : ${minute < 10 ? '0' + minute : minute} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = 'circle'> ${date} </span>`
}       

const scale = (num,in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) /
    (in_max - in_min) + out_min;
}




// =================

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', ()=>{
    activeSlide ++

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBg()
    setSlide()
})

leftBtn.addEventListener('click', ()=>{
    activeSlide --

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setBg()
    setSlide()
})

setBg()

function setBg(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setSlide(){
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}