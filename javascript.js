let slideBtnLeft = document.getElementById("slider-btn-left")
let slideBtnRight=document.getElementById("slider-btn-right")
let imgItms=document.querySelectorAll(".image-itms")

console.log(imgItms.length-1)
let startSlider=0
let endSlider=(imgItms.length-1) *100

slideBtnLeft.addEventListener("click",handelLeftBtn)

function handelLeftBtn(){
    if(startSlider < 0){
        startSlider=startSlider+100;
    }

    imgItms.forEach(element =>{
        element.style.transform=`translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click",handelRightBtn)

function handelRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider=startSlider-100;
    }

    imgItms.forEach(element =>{
        element.style.transform=`translateX(${startSlider}%)`;
    })
}

function renderSlideAutomatic(){
    
if(startSlider >= -endSlider+100){
    handelRightBtn()
}
else{
    startSlider=0;
}
}
setInterval(renderSlideAutomatic,3200);

const leftbtn =document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");

rightbtn.addEventListener("click",function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn.addEventListener("click",function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftbtn1 =document.querySelector(".l-btn-a");
const rightbtn1=document.querySelector(".r-btn-b");

rightbtn.addEventListener("click",function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide-a");
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn.addEventListener("click",function(event){
    console.log("done");
    const conent = document.querySelector(".product-slide-a");
    conent.scrollLeft -=1100;
    event.preventDefault();
});
