var num,num1,num2,num3;

var Shotok = document.getElementById('Shotok');
var ft2 = document.getElementById('ft2');

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
document.getElementById('btn').addEventListener('click',getarea)
function getarea(e)
{
iputsfuc();
iputs1fuc();
iputs2fuc();
iputs3fuc();

var width = (num1/12)+Number(num);
var length = (num3/12)+Number(num2);

console.log(width);
console.log(length);

Shotok.innerHTML=(width*length)/435.6;
ft2.innerHTML=(width*length);


document.getElementById('inputs').value='';
document.getElementById('inputs1').value='';
document.getElementById('inputs2').value='';
document.getElementById('inputs3').value='';

}
