var temp = '';
function mOver(obj){
    obj.style.backgroundColor="rgba(139, 58, 26, 0.3)";
    obj.style.color="rgba(245, 255, 255)";
    obj.style.borderBottom="5px solid rgba(105, 46, 21, 0.550)";
    temp = obj.innerHTML;
    return temp;

}
function mOut(obj){
    temp = mOver(obj)
    obj.style.backgroundColor="rgba(228, 131, 52, 0)";
    obj.style.color="rgb(124, 54, 26)";
    obj.style.borderBottom="";
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




// 姓名中英變換
function mOvername(obj){
    obj.innerHTML = "楊翔瑜的首頁";
    obj.style.fontWeight="bold";
}
function mOutname(obj){
    obj.innerHTML = "Hsiang-Yu's Homepage";
    obj.style.fontWeight="";
}