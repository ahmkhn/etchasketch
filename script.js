// 16x16 divs...
//const rowContainer = document.querySelector(".row-container");
//const columnContainer=document.querySelector(".column-container");
/*const body = document.querySelector("body");
const mainRowWrapper=document.querySelector(".main-row-wrapper");
const mainColWrapper=document.querySelector(".main-col-wrapper");

for(let q=0;q<16;q++){
    const rowContainer=document.createElement('div');
    rowContainer.setAttribute("class","rowContainer"+q);
    mainRowWrapper.appendChild(rowContainer);
    const rowDivs=document.createElement('div')
    rowDivs.setAttribute("class","x"); // container
    let x=document.createElement('div');
    x.textContent=("0");
    x.setAttribute("class","row");
    rowDivs.appendChild(x);
    rowContainer.appendChild(rowDivs);
}*/
const flexGrid = document.querySelector(".flex-grids");

for(let i=0;i<256;i++)
{
    let col=document.createElement('div');
    col.setAttribute("class","column");
    flexGrid.appendChild(col);
}