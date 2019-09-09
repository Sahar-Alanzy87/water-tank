const radios = document.querySelectorAll('input[type="checkbox"]');
const levels = document.querySelectorAll('label');
const water = document.querySelector('.water');

const reset = function(){
    radios.forEach(function(radio){
        radio.checked = false;
    })
}

radios.forEach(function(radio) {
    radio.addEventListener('click', function () {
        radios.forEach(function(radio) {
            radio.checked = false;
        })

        radio.checked = true;
        const level = radio.previousSibling.previousSibling.textContent;
        

        water.style.height = level;

        if (level === '100%') {
            alert('طفيي الماطور');
        }
    })
})

window.onload = reset;