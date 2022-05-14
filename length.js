var selectedValue;
var num;
var inch = document.getElementById("inch");
var feet = document.getElementById("feet");
var mile = document.getElementById("mile");
var kilo = document.getElementById("kilo");
var meter = document.getElementById("meter");
var centi = document.getElementById("centi");
var mili = document.getElementById("mili");




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
      inch.innerHTML='';
      feet.innerHTML='';
      mile.innerHTML='';
      kilo.innerHTML='';
      meter.innerHTML='';
      centi.innerHTML='';
      mili.innerHTML='';

    }
else if(selectedValue=="Inchies")
  {
    inch.innerHTML=num;
    feet.innerHTML=num/12;
    mile.innerHTML=num/63360;
    kilo.innerHTML=(num*2.54)/100000;
    meter.innerHTML=(num*2.54)/100;
    centi.innerHTML=num*2.54;
    mili.innerHTML=(num*2.54)*10;
}
else if(selectedValue=="Feet")
{
  inch.innerHTML=num*12;
  feet.innerHTML=num;
  mile.innerHTML=num/5280;
  kilo.innerHTML=(num*2.54*12)/100000;
  meter.innerHTML=(num*2.54*12)/100;
  centi.innerHTML=num*2.54*12;
  mili.innerHTML=(num*2.54*12)*10;
}

else if(selectedValue=="Miles")
{
  inch.innerHTML=num*63360;
  feet.innerHTML=(num*63360)/12;
  mile.innerHTML=num;
  kilo.innerHTML=(num*2.54*63360)/100000;
  meter.innerHTML=(num*2.54*63360)/100;
  centi.innerHTML=num*2.54*63360;
  mili.innerHTML=(num*2.54*63360)*10;
}
else if(selectedValue=="Kilometer")
{
  inch.innerHTML=(num*100000)/2.54;
  feet.innerHTML=(num*100000)/(2.54*12);
  mile.innerHTML=num*0.6214;
  kilo.innerHTML=num;
  meter.innerHTML=num*1000;
  centi.innerHTML=num*100000;
  mili.innerHTML=num*1000000;
}
else if(selectedValue=="Meter")
{
  inch.innerHTML=(num*100)/2.54;
  feet.innerHTML=(num*100)/(2.54*12);
  mile.innerHTML=(num/1000)*0.6214;
  kilo.innerHTML=num/1000;
  meter.innerHTML=num;
  centi.innerHTML=num*100;
  mili.innerHTML=num*1000;
}
else if(selectedValue=="Centimeter")
{
  inch.innerHTML=(num)/2.54;
  feet.innerHTML=(num)/(2.54*12);
  mile.innerHTML=(num/100000)*0.6214;
  kilo.innerHTML=num/100000;
  meter.innerHTML=num/100;
  centi.innerHTML=num;
  mili.innerHTML=num*10;
}
else if(selectedValue=="Milimeter")
{
  inch.innerHTML=(num/10)/2.54;
  feet.innerHTML=(num/10)/(2.54*12);
  mile.innerHTML=(num/1000000)*0.6214;
  kilo.innerHTML=num/1000000;
  meter.innerHTML=num/1000;
  centi.innerHTML=num/10;
  mili.innerHTML=num;
}



}
