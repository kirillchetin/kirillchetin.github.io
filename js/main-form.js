function formAnimation(){

    let name = document.getElementById('input-name');
    let phone = document.getElementById('input-phone');
    let nameWrapper = document.getElementById('wrapper-name');
    let phoneWrapper = document.getElementById('wrapper-phone');



    name.onfocus = function(){
        nameWrapper.classList.add('inputFocus');
    }
    
    name.onblur = function(){
        if(name.value == ""){
            nameWrapper.classList.remove('inputFocus');
        }
    }


    phone.onfocus = function(){
        phoneWrapper.classList.add('inputFocus');
    }

    phone.onblur = function(){
        if(phone.value == ""){
            phoneWrapper.classList.remove('inputFocus');
        }
    }

}


formAnimation();