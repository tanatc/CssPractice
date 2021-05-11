import './css_01.html' //从这里引入无需手动刷新，从entry引入需要手动刷新
import './css_01.less'



const darknessSlider = document.querySelector("#huge");
darknessSlider.addEventListener('change', (e) => {
    const val = darknessSlider.value
    document.documentElement.style.setProperty('--main-theme', val);
    // let title = document.getElementsByClassName('title')
    // console.log(title.length)
    // for (let i = 0; i < title.length; i++) {
    //     console.log(title[0].)
    // }
});
const changetheme = document.querySelectorAll('.toggle')
let green = document.styleSheets[0].cssRules[0].style.getPropertyValue('--green')
let yellow = document.styleSheets[0].cssRules[0].style.getPropertyValue('--yellow')
let blue = document.styleSheets[0].cssRules[0].style.getPropertyValue('--blue')
let map = {
    green,
    yellow,
    blue
}
for (let i = 0; i < changetheme.length; i++) {
    changetheme[i].onclick = function() {
        document.documentElement.style.setProperty('--main-theme', map[changetheme[i].dataset.color]);

    }
}