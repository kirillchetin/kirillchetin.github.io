function formAnimation(){

    let name = document.getElementById('feedback-input-name');
    let fbNameWrapper = document.getElementById('feedback-wrapper-name');

    let phone = document.getElementById('feedback-input-phone');
    let fbPhoneWrapper = document.getElementById('feedback-wrapper-phone');

    let email = document.getElementById('feedback-input-email');
    let fbEmailWrapper = document.getElementById('feedback-wrapper-email');

    let message = document.getElementById('feedback-input-message');
    let fbMessageWrapper = document.getElementById('feedback-wrapper-message');


    name.onfocus = function(){
        fbNameWrapper.classList.add('inputFocus')
    }

    name.onblur = function(){
        if(name.value == ""){
            fbNameWrapper.classList.remove('inputFocus')
        }
    }



    phone.onfocus = function(){
        fbPhoneWrapper.classList.add('inputFocus')
    }

    phone.onblur = function(){
        if(phone.value == ""){
            fbPhoneWrapper.classList.remove('inputFocus')
        }
    }



    email.onfocus = function(){
        fbEmailWrapper.classList.add('inputFocus')
    }

    email.onblur = function(){
        if(email.value == ""){
            fbEmailWrapper.classList.remove('inputFocus')
        }
    }


    message.onfocus = function(){
        fbMessageWrapper.classList.add('inputFocus')
    }

    message.onblur = function(){
        if(message.value == ""){
            fbMessageWrapper.classList.remove('inputFocus')
        }
    }

}


formAnimation();