document.getElementById('Mon').onclick = function () { setNewDay('пн', 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA', this) }
document.getElementById('Two').onclick = function () { setNewDay('вт', 'https://ru.wikipedia.org/wiki/%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA', this) }
document.getElementById('Whe').onclick = function () { setNewDay('ср', 'https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%B0', this) }
document.getElementById('Fir').onclick = function () { setNewDay('чт', 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%82%D0%B2%D0%B5%D1%80%D0%B3', this) }
document.getElementById('Fri').onclick = function () { setNewDay('пт', 'https://ru.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0', this) }
document.getElementById('Sat').onclick = function () { setNewDay('сб', 'https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D0%B0', this) }
document.getElementById('Sun').onclick = function () { setNewDay('вс', 'https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%8C%D0%B5', this) }

const task = document.getElementById('task')
const done = document.getElementById('done')

/* 
<li id="0">
    <button id="b0" class="tasks">🞬</button>
    Task
</li> 
*/

let day = ''
let lastDay = ''
let shadow = ''
let background_color = ''
let select_btn

//true чтобы открывать окна с википедией
let openWiki = false

function selectCssStyle(obj) {
    if(day != lastDay) {
        if(lastDay.length != 0) {
            select_btn.style.backgroundColor = background_color
            select_btn.style.boxShadow = shadow
        }
        
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
    selectCssStyle(obj)
    if (openWiki) {
        open(url,  '', 'left=1000,top=500,width=500,height=350')
    }
}