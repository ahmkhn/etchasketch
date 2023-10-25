// 16x16 divs...

const flexGrid = document.querySelector(".flex-grids");

for(let i=0;i<256;i++)
{
    let col=document.createElement('div');
    col.setAttribute("class","column");
    flexGrid.appendChild(col);
}
const columns = document.querySelectorAll('.column');

columns.forEach(columns =>{
    columns.addEventListener('mouseenter',function(){
        columns.style.backgroundColor="red";
    })
});
function clearClicked()
{
    columns.forEach(columns=>{
        columns.style.backgroundColor="white";
    })
};