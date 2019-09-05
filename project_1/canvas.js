

var canvas = document.querySelector("canvas");


canvas.width = "250";
canvas.height = "250";

var c  = canvas.getContext("2d");


// r^2 = x^2 + y^2 ==> y = (+-)sqrt(r^2-x^2)

function getCirclePathTop (x,r) {
    return Math.sqrt(Math.pow(r,2)-Math.pow(x,2));
}
function getCirclePathBottom (x,r) {
    return - Math.sqrt(Math.pow(r,2)-Math.pow(x,2));
}


c.fillStyle = "rgb(255,0,0)"
c.fillRect(50,50,100,100)

var r  = 10
var pR = 45
var x = -pR+5
var color = "red"
var a = 0;

var grd = c.createRadialGradient(125,125,25,125,125,100)
    grd.addColorStop(0.1,"lightblue");
    grd.addColorStop(1,"white");

var grd1 = c.createRadialGradient(125,125,45,125,125,140)
    grd1.addColorStop(0,"grey");
    grd1.addColorStop(0.5,"white");

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);



    c.fillStyle = grd;
    c.fillRect(0,0,250,250)





    c.beginPath();
    c.arc(x+125,getCirclePathTop(x,pR) + 125,r,0, Math.PI * 2,false);
    c.strokeStyle = color;
    c.stroke();
    c.fillStyle = color
    c.fill();

    c.beginPath();
    c.arc(x+125,getCirclePathBottom(x,pR) + 125,r,0, Math.PI * 2,false);
    c.strokeStyle = color;
    c.stroke();
    c.fillStyle = color;
    c.fill();



    x += a

    c.beginPath()
    c.arc(125,125,35.5,0, Math.PI * 2,false);
    c.strokeStyle = "blue";
    c.stroke();

    c.beginPath()
    c.arc(125,125,55.5,0, Math.PI * 2,false);
    c.strokeStyle = "blue";
    c.stroke();



    c.fillStyle = grd1;
    c.fillRect(50,115,150,20)

    if (x == pR-5){
        a = -a
    }

    if (x == -pR+5){
        a = -a
    }


}
animate();

document.getElementById("image2").addEventListener("click", function(){
    if (a == 0){
        a = 1;
    }
    else{
        a = -a;
    }

});

document.getElementById("image2").addEventListener("mouseover", function(){
    a = 1;
})

document.getElementById("image2").addEventListener("mouseleave", function(){
    a = 0;
})


