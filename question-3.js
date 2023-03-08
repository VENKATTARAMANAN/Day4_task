var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
    for(i=0;i<=result.length;i++)
{
   
    console.log("country name is:",result[i].name);
    console.log("country region is:",result[i].region);
    console.log("country population is",result[i].population);
    console.log("country sub-region is",result[i].subregion);
}  
}