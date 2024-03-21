// JavaScript函数以关闭覆盖层
function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}

var temp = '';

function mOver(obj){
    obj.style.backgroundColor="rgba(139, 58, 26, 0.3)";
    obj.style.color="rgba(255, 255, 255)";
    obj.style.fontWeigth = 100;
    temp = obj.innerHTML;
    return temp;

}
function mOut(obj){
    temp = mOver(obj)
    obj.style.backgroundColor="rgba(228, 131, 52, 0)";
    obj.style.color="rgb(124, 54, 26)";
    obj.innerHTML=temp;   
}



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function mDown_A(obj){
    document.getElementById('A').hidden = false;
    document.getElementById('B').hidden = true;
    document.getElementById('C').hidden = true;
    document.getElementById('D').hidden = true;
    document.getElementById('E').hidden = true;
    
}

function mDown_B(obj){
    document.getElementById('A').hidden = true;
    document.getElementById('B').hidden = false;
    document.getElementById('C').hidden = true;
    document.getElementById('D').hidden = true;
    document.getElementById('E').hidden = true;
    
}

function mDown_C(obj){
    document.getElementById('A').hidden = true;
    document.getElementById('B').hidden = true;
    document.getElementById('C').hidden = false;
    document.getElementById('D').hidden = true;
    document.getElementById('E').hidden = true;
    
}

function mDown_D(obj){
    document.getElementById('A').hidden = true;
    document.getElementById('B').hidden = true;
    document.getElementById('C').hidden = true;
    document.getElementById('D').hidden = false;
    document.getElementById('E').hidden = true;
    
}

function mDown_E(obj){
    document.getElementById('A').hidden = true;
    document.getElementById('B').hidden = true;
    document.getElementById('C').hidden = true;
    document.getElementById('D').hidden = true;
    document.getElementById('E').hidden = false;
    
}

function mUp(obj){
    document.getElementById('top').hidden = false;
}
