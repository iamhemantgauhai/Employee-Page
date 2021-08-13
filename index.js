const imgs=[
    "hipi4.jpeg",
    "hipi1.jpeg",
    "hipi2.jpeg",
    "hipi3.jpeg",
]
const container=document.getElementById("container")
function renderImages(){
    for(let i =0;i<imgs.length;i++){
        container.innerHTML += `<img src=${imgs[i]}>`
    }
}
renderImages()