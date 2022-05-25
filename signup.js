const nameInput = document.getElementById('InputName');
const surnameInput = document.getElementById('InputSurname');
const usernameInput = document.getElementById('InputUsername');
const emailInput = document.getElementById('InputEmail');
const passwordInput = document.getElementById('InputPassword');
const clearForm = document.getElementById('inputs');
const button = document.getElementById('check');
const wrapper = document.querySelector('.wrapper');

function validate(){


     if(passwordInput.value.match(/[A-Z]/)){
          $('#uppercase').css({'text-decoration':'line-through'})
     }
     else{
          $('#uppercase').css({'text-decoration':'none'})
     }

     if(passwordInput.value.match(/[a-z]/)){
          $('#lowercase').css({'text-decoration':'line-through'})
     }
     else{
          $('#lowercase').css({'text-decoration':'none'})
     }
     
     if(passwordInput.value.match(/[!\@\#\$\%\^\&]/)){
          $('#special').css({'text-decoration':'line-through'})
     }
     else{
          $('#special').css({'text-decoration':'none'})
     }

     if(passwordInput.value.match(/[0-9]/)){
          $('#number').css({'text-decoration':'line-through'})
     }
     else{
          $('#number').css({'text-decoration':'none'})
     }

     if(passwordInput.value.length == 0){
        $('.leftpassword').text('8 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }
     else if(passwordInput.value.length == 1){
        $('.leftpassword').text('7 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }
     else if(passwordInput.value.length == 2){
        $('.leftpassword').text('6 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }     
     else if(passwordInput.value.length == 3){
        $('.leftpassword').text('5 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }
     else if(passwordInput.value.length == 4){
        $('.leftpassword').text('4 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }
     else if(passwordInput.value.length == 5){
        $('.leftpassword').text('3 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
     }
    else if(passwordInput.value.length == 6){
        $('.leftpassword').text('2 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
    }
    else if(passwordInput.value.length == 7){
        $('.leftpassword').text('1 characters left');
        $('.leftpassword').css({
          'text-decoration':'none'
          });
    }
    else if(passwordInput.value.length > 7){
        $('.leftpassword').text('0 characters left')
        $('.leftpassword').css({
            'text-decoration':'line-through'
        });
    }
}