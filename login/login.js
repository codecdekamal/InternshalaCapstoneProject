 /****** javascript for form*/ 
 const onSubmitting = document.getElementById("onSubmitting")
 const input = document.querySelectorAll(".input")
 console.log(input)
 onSubmitting.addEventListener("submit",(e)=>{
  e.preventDefault()
 if(input[0].value.includes("@") && input[1].value==="12345"){
    alert("You are logged in successfully")
 }
 else{
  alert("Please check whether your email or password is correct or not")
 }
 input.forEach((item)=>{
  item.value =""
 })
 
 })
 $(function(){
   $("#header").load("../header.html");
    $("#footer").load("../footer.html");
 })