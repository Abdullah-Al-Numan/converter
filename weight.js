var selectedValue;
var num;
var kilo = document.getElementById("kilo");
var gram = document.getElementById("gram");
var mili = document.getElementById("mili");
var ton = document.getElementById("ton");
var pound = document.getElementById("pound");
var ounce = document.getElementById("ounce");



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
      kilo.innerHTML='';
      gram.innerHTML='';
      mili.innerHTML='';
      ton.innerHTML='';
      pound.innerHTML='';
      ounce.innerHTML='';

    }
else if(selectedValue=="Kilogram")
  {
    kilo.innerHTML=num;
    gram.innerHTML=num*1000;
    mili.innerHTML=num*1000000;
    ton.innerHTML=num/1000;
    pound.innerHTML=num*2.2;
    ounce.innerHTML=num*2.2*16;

}
else if(selectedValue=="Gram")
{
  kilo.innerHTML=num/1000;
  gram.innerHTML=num;
  mili.innerHTML=num*1000;
  ton.innerHTML=num/1000000;
  pound.innerHTML=(num*2.2)/1000;
  ounce.innerHTML=(num*2.2*16)/1000;

}
else if(selectedValue=="Miligram")
{
  kilo.innerHTML=num/1000000;
  gram.innerHTML=num/1000;
  mili.innerHTML=num;
  ton.innerHTML=num/1000000000;
  pound.innerHTML=(num/1000000)*2.2;
  ounce.innerHTML=(num*2.2/1000000)*16;

}
else if(selectedValue=="Tonns")
{
  kilo.innerHTML=num*1000;
  gram.innerHTML=num*1000000;
  mili.innerHTML=num*1000000000;
  ton.innerHTML=num;
  pound.innerHTML=num*1000*2.2;
  ounce.innerHTML=num*1000*2.2*16;

}
else if(selectedValue=="Pounds")
{
  kilo.innerHTML=num/2.2;
  gram.innerHTML=(num*1000)/2.2;
  mili.innerHTML=(num*1000000)/2.2;
  ton.innerHTML=num/(1000*2.2);
  pound.innerHTML=num;
  ounce.innerHTML=num*16;

}
else if(selectedValue=="Ounces")
{
  kilo.innerHTML=num/(2.2*16);
  gram.innerHTML=(num*1000)/(2.2*16);
  mili.innerHTML=(num*1000000)/(2.2*16);
  ton.innerHTML=num/(1000*2.2*16);
  pound.innerHTML=num/16;
  ounce.innerHTML=num;

}


}
