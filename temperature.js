var selectedValue;
var num;
var celsius = document.getElementById("celsius");
var  kelvin = document.getElementById("kelvin");
var furenheight = document.getElementById("furenheight");



 function getSelectValue()
        {
             selectedValue = document.getElementById("selector").value;
             document.getElementById("inputs").value='';

        }
  getSelectValue();

  addEventListener("input",result)

  function result(e){
     num=e.target.value;
    if(isNaN(num))
    {
      celsius.innerHTML='';
      kelvin.innerHTML='';
      furenheight.innerHTML='';
    }
else if(selectedValue=="Celsius")
  {
    celsius.innerHTML=num;
    kelvin.innerHTML=273+Number(num);
    furenheight.innerHTML=(num*1.8)+32;
}
else if(selectedValue=="Kelvin")
{
  celsius.innerHTML=(num-273);
  kelvin.innerHTML=num;
  furenheight.innerHTML=((num-273)*1.8)+32;
}
else if(selectedValue=="Furenheight")
{
  celsius.innerHTML=(num-32)*0.55556;
  kelvin.innerHTML=((num-32)*0.55556)+273;
  furenheight.innerHTML=num;
}


}
