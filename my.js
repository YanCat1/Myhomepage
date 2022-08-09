time = document.querySelector('h1')
btn = document.querySelector('.icon-duigouxiao')
text = document.querySelector('input')
record = document.querySelector('.record')

let now = dayjs().format('YYYY-MM-DD hh:mm:ss')
time.innerText = now
setInterval(function(){
    let now = dayjs().format('YYYY-MM-DD hh:mm:ss')
    text.innerText = now
},100)
/* 点击按钮 获取内容 展示每次记录内容 */
let num = 1
btn.onclick=function(){
    let elem = document.createElement("div");
    if(num<=5){
        elem.innerText = text.value
        elem.style = 'color:white;'
        record.appendChild(elem)
    }
    num+=1
}



