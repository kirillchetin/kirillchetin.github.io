function parallaxSection(){
    
    let screenSize = window.innerWidth;

    if(screenSize > 1024){
        $(window).scroll(function(){
            $('#parallax-1').bgscroll({
                direction:'top',
                bgpositionx: 50,
                debug: false,
                min:0,
                max:100
            })
        })
    }

}

function parallaxSection2(){

    let screenSize = window.innerWidth;

    if(screenSize > 1024){
        $(window).scroll(function(){
            $('#parallax-2').bgscroll({
                direction:'top',
                bgpositionx: 50,
                debug: false,
                min:0,
                max:100
            })
        })
    }

}



parallaxSection();
parallaxSection2()