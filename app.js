const $stick1 = document.querySelector('.stick1')
const $stick2 = document.querySelector('.stick2')
const $stick3 = document.querySelector('.stick3')
const $burger = document.querySelector('.burger')
const $header = document.querySelector('header')
const $bar = document.querySelector('.bar')
const $li = document.querySelectorAll('li')

$burger.addEventListener('click', toggle)

function toggle(e) {
    if(e.target.classList.contains('burger')){
        $stick1.classList.toggle('stick1-active')
        $stick2.classList.toggle('stick2-active')
        $stick3.classList.toggle('stick3-active')
        $header.classList.toggle('active-header')
        if(e.target.classList.contains('burger')){
            setTimeout(t => {$bar.classList.toggle('bar-active')
            $li.forEach(e => e.classList.toggle('li-active'))}, 100)
        } else {
            $bar.classList.toggle('bar-active')
            $li.forEach(e => e.classList.toggle('li-active'))
        }
    }
}
