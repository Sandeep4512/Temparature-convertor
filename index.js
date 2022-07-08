 const  tempconvertor=()=>{
   var farheight= document.getElementById('farheight').value;
   var celsious= document.getElementById('Celsious').value;

   if(farheight !=""){
         celsious=parseFloat(farheight-32)*1.8;
         
   }else{
    farheight=parseFloat(celsious*1.8)+32;
   }
     document.getElementById('farheight').value=parseFloat(farheight).toFixed(1);
     document.getElementById('Celsious').value=parseFloat(celsious).toFixed(1);
 }
 const clearfrom=()=>{
     document.getElementById('farheight').value=" ";
     document.getElementById('Celsious').value=" ";
 }