document.addEventListener('click', (event)=>{
    let circle=document.createElement('div');
    circle.className='circle';

    let x=event.clientX;
    let y=event.clientY;

    circle.style.left=(x-10)+'px'
    circle.style.top=(y-10)+'px'

    document.body.appendChild(circle)
})