const Door = document.querySelector('.doorImg');
const Car = document.querySelector('.car')
const allWindows = document.querySelectorAll('.window');
const smoke = document.querySelector('.smoke');

//! BUTTONS
const openDoor = document.querySelector('.openDoor');
const go = document.querySelector('.go');
const closeDoor = document.querySelector('.closeDoor');
const lightSwitch = document.querySelector('.lightSwitch');
const burnChimney = document.querySelector('.burnChimney');


openDoor.addEventListener('click', () =>{
    if(Door.classList === 'close doorImg'){
        Door.classList.remove('close')
    }else{
        Door.classList.add('Open');
    }
})
closeDoor.addEventListener('click', () =>{
   Door.classList.add('close');
    
})

go.addEventListener('click', () => {
    if(Door.classList.contains('Open') ){
        Car.classList.add('goGarage')
    }
    
})
lightSwitch.addEventListener('click', () => {
    allWindows.forEach(windows => {
        windows.classList.toggle('light')
    })
})

burnChimney.addEventListener('click', chimney)


function chimney (){
    smoke.classList.toggle('active')
}