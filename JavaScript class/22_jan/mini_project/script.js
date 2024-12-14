const btn=document.getElementById('button');

const randomColor= () => {
    let val= '0123456789ABCDEF';
    let cons='#';
    for (let i=0; i < 6; i++){
        cons=cons + val[Math.floor(Math.random()*16)];
        console.log(cons);
        
    } return cons;
}
// console.log(randomColor());
function changeRandomColor(){ 

    document.body.style.backgroundColor=randomColor()
    btn.style.backgroundColor=randomColor()
    btn.style.color=randomColor()
}
btn.addEventListener('click', changeRandomColor);

