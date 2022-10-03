var x = document.getElementById("menu-toggle");
x.addEventListener("click",function(){
     var y = document.getElementById("nav");
     if(y.className == "nav-main"){
         y.className= "nav";
     }

     else if(y.className == "nav"){
         y.className = "nav-main";
     }
 });

 var i = 1;
 var n=0;
 var element = document.querySelectorAll("li#image_slide");
 function changeList(){
    if(element.length>0){
          var temp = i-(1);
      element[i].className="test";
      if(i>0){ 
        element[temp].className="image_slide";
      }
      if(i==0){
          element[5].className= "image_slide";
      }
       i++;
      if(i>=element.length){
        i=0;
      }  
    }
    else
    console.log("error");  
 }
 var list = setInterval(changeList,3000);


 var modal_disp = document.getElementById("book_now");
 document.getElementById("book_now").addEventListener('click',function(){
       document.getElementById("modal").style.display="block";
       console.log("success;");
 });

 var modal_close = document.getElementById("close");
 modal_close.addEventListener("click",function(){
       document.getElementById("modal").style.display="none";
       console.log("success;");
 });

 var form = document.getElementById("submit");
 form.addEventListener('click',function(){
    if (form .preventDefault)
        form.preventDefault();
    else {
        form.returnValue = false ;}
     var email = document.getElementById("email").value;
     var pass = document.getElementById("pass").value;
     if(email == "" || pass==""){
         alert("input fields must be filled");
     }

     else if(email=="fana" && pass=="fana"){
        alert("successfully logged");
        document.getElementById("modal").style.display="none";
     }
     else{
         alert("incorrect username and password");

     }
 });

 var form2 = document.getElementById("submits");
 form2.addEventListener('click',function(){
    if (form2 .preventDefault)
        form2.preventDefault();
    else {
        form2.returnValue = false ;}
        var rule1 = /^[a-zA-Z]+$/;
        var rule2 = /^[0-9]+$/;
     var fname = document.getElementById("input_group1").value;
     var mname = document.getElementById("input_group2").value;
     var phone = document.getElementById("input_group3").value;
     if(fname == "" || mname=="" || phone==""){
         alert("input fields must be filled");
     }
     else if(!fname.match(rule1)||!mname.match(rule1) ||!phone.match(rule2)){
        alert("invalid input on one of the fields");

     }

 });


