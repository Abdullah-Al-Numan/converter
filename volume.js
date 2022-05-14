var num,num1,num2,num3,num4,num5;

var Koya = document.getElementById('Koya');
var Sotak = document.getElementById('Sotak');
var ft3 = document.getElementById('ft3');



function iputsfuc()
{
    num = document.getElementById('inputs').value;
    if(num=='')
    {
      num=0;
    }
}

function iputs1fuc()
{
    num1 = document.getElementById('inputs1').value;
    if(num1=='')
    {
      num1=0;
    }
}
function iputs2fuc()
{
    num2 = document.getElementById('inputs2').value;
    if(num2=='')
    {
      num2=0;
    }
}
function iputs3fuc()
{
    num3 = document.getElementById('inputs3').value;
    if(num3=='')
    {
      num3=0;
    }
}

function iputs4fuc()
{
    num4 = document.getElementById('inputs4').value;
    if(num4=='')
    {
      num4=0;
    }
}

function iputs5fuc()
{
    num5 = document.getElementById('inputs5').value;
    if(num5=='')
    {
      num5=0;
    }
}

document.getElementById('btn').addEventListener('click',getarea)
function getarea(e)
{
iputsfuc();
iputs1fuc();
iputs2fuc();
iputs3fuc();
iputs4fuc();
iputs5fuc();

var width = (num1/12)+Number(num);
var length = (num3/12)+Number(num2);
var height = (num5/12)+Number(num4);
console.log(width);
console.log(length);
console.log(height);
var vol = width*length*height;
var rem = vol%364;
var volk=vol-rem;

Koya.innerHTML=volk/364;
Sotak.innerHTML=rem/22.75;
ft3.innerHTML=vol;


document.getElementById('inputs').value='';
document.getElementById('inputs1').value='';
document.getElementById('inputs2').value='';
document.getElementById('inputs3').value='';
document.getElementById('inputs4').value='';
document.getElementById('inputs5').value='';


}
