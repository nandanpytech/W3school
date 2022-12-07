const a=document.querySelectorAll(".item")
a.forEach(element => {
    element.addEventListener('mouseover',()=>{
        var child=element.children
        child[1].style.display="block"
        removediv(child[1])
    })
});
function removediv(ele){
const b=document.querySelectorAll(".border")
b.forEach(element => {
    element.style.display="none"
});
ele.style.display="block"
}
