const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => {console.log('click'); clickParagraph.innerHTML = "CHECK THE CONSOLE"} );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );



const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const hoverParagraph = document.getElementById("mouse");

hoverParagraph.addEventListener("mouseover", highlight)