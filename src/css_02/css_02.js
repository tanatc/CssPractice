import './css_02.less';
import './css_02.html';


// const testulList = document.getElementsByClassName('testul');
// const fragment = document.createDocumentFragment()
// for (let i = 1; i <= 10; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `xiangmu${i}`;
//     li.className = 'li'
//     li.dataset.myname = `test${i}`
//     fragment.appendChild(li)
//     testulList[0].appendChild(fragment)

// }

// function fn(e) {
//     console.log(e.target.dataset.myname);
// }
// testulList[0].onclick = function(e) {
//         fn(e);
//     }
//     // 单独为每个子元素注册事件
//     // var list = document.getElementsByClassName('li');
//     // for (let i = 0; i < list.length; i++) {
//     //     list[i].onclick = function(e) {
//     //         fn(e);
//     //     }
//     // }
function play(e) {
    let key = e.key || e.target.dataset.key;
    let audio = document.querySelector(`audio[data-key = '${key}']`)
    let div = document.querySelector(`div[data-key = '${key}']`)
    console.log(div)
    div.classList.add('play');
    audio.currentTime = 0;
    audio.play();
}

function stop(e) {
    let key = e.key || e.target.dataset.key;
    let div = document.querySelector(`div[data-key = '${key}']`);
    setTimeout(function() { div.classList.remove('play') }, 0.1);
}
document.querySelector('.box').addEventListener('mousedown', function(e) {
    play(e);
});

document.addEventListener('keydown', function(e) {
    play(e);
}, false);

document.querySelector('.box').addEventListener('mouseup', function(e) {
    stop(e);
});

document.addEventListener('keyup', function(e) {
    stop(e);
}, false);