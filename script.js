
 function validation(){
    var user=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var comments=document.getElementById('comments').value;

    if(user ==""){
        document.getElementById('username').innerHTML="ENTER YOUR USERNAME";
        return false;
    }
    if((user.length<=2) || (user.length >15)){
        document.getElementById('username').innerHTML="LENGTH MUST BE BETWEEN 2 and 15";
        return false;
    }

    if(!isNaN(user)){
        document.getElementById('username').innerHTML="NO NUMBERS ALLOWED";
        return false;
    }

    if(email ==""){
        document.getElementById('email1').innerHTML="ENTER YOUR EMAIL";
        return false;
    }
    if(number ==""){
        document.getElementById('numb').innerHTML="ENTER YOUR NUMBER";
        return false;
    }
    if(isNaN(number)){
        document.getElementById('numb').innerHTML="DON'T ENTER CHARACTERISTICS ";
        return false;
    }
    if(number.length!=10){
        document.getElementById('numb').innerHTML="NOT MORE THAN 10 DIGITS";
        return false;
    }
    if(comments==""){
        document.getElementById('cmt').innerHTML="COMMENTS CANNOT BE EMPTY";
        return false;
    }

}
