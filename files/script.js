const btn_Mon = document.getElementById('Mon')
const btn_Two = document.getElementById('Two')
const btn_Whe = document.getElementById('Whe')
const btn_Fir = document.getElementById('Fir')
const btn_Fri = document.getElementById('Fri')
const btn_Sat = document.getElementById('Sat')
const btn_Sun = document.getElementById('Sun')

const task = document.getElementById('task')
const done = document.getElementById('done')


let day = 'пн'
let lastDay = 'пн'
let shadow = '2px 2px 0 rgb(44, 121, 37)'
let background_color = 'rgb(59, 160, 49)'
let select_btn = btn_Mon
let openWiki = false

select_btn.style.backgroundColor = 'rgb(100, 100, 100)'
select_btn.style.boxShadow = '2px 2px 0 rgba(105, 105, 105, 0)'

function check(obj) {
    if(day != lastDay) {
        select_btn.style.backgroundColor = background_color
        select_btn.style.boxShadow = shadow
        
        shadow = obj.style.boxShadow
        background_color = obj.style.backgroundColor

        select_btn = obj

        select_btn.style.backgroundColor = 'rgb(100, 100, 100)'
        select_btn.style.boxShadow = '2px 2px 0 rgba(105, 105, 105, 0)'
    }
}

function setNewDay(tempday, url, obj) {
    lastDay = day
    day = tempday
    check(obj)
    if (openWiki) {
        open(url,  '', 'left=1000,top=500,width=500,height=350')
    }
}

btn_Mon.onclick = function () {
    setNewDay('пн', 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA', this)
}

btn_Two.onclick = function () {
    setNewDay('вт', 'https://ru.wikipedia.org/wiki/%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA', this)
}

btn_Whe.onclick = function () {
    setNewDay('ср', 'https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%B0', this)
}

btn_Fir.onclick = function () {
    setNewDay('чт', 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%82%D0%B2%D0%B5%D1%80%D0%B3', this)
}

btn_Fri.onclick = function () {
    setNewDay('пт', 'https://ru.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0', this)
}

btn_Sat.onclick = function () {
    setNewDay('сб', 'https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D0%B0', this)
}

btn_Sun.onclick = function () {
    setNewDay('вс', 'https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%8C%D0%B5', this)
}