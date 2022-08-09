time = document.querySelector('h1')
btn = document.querySelector('.icon-duigouxiao')
text = document.querySelector('input')
record = document.querySelector('.record')
body = document.querySelector('body')


let now = dayjs().format('YYYY-MM-DD hh:mm:ss')
time.innerText = now
setInterval(function(){
    let now = dayjs().format('YYYY-MM-DD hh:mm:ss')
    time.innerText = now
},100)

text.onfocus=function(){
    // body.style = "backgroundColor='white'"
    body.style.background='white';
    time.style.color = 'black';
    text.style.borderBottom='5px solid black';
    btn.style.color = 'black';
    text.style.color = 'black';
}
/* 点击按钮 获取内容 展示每次记录内容 */
let num = 1
btn.onclick=function(){
    let elem = document.createElement("h3");
    if(num<=5){
        elem.innerText = text.value
        text.value = ''
        elem.style = 'color:black;'
        record.appendChild(elem)
    }
    num+=1
}



