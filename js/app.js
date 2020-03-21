$(document).ready(function(){

    fixedMenuOnScroll();
    fixedButtonShow();
    mainMenu();
    scrollTo();

});






function fixedMenuOnScroll(){

    $('.header').removeClass('.fixedMenuOnScroll');
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('.header').addClass('fixedMenuOnScroll').fadeIn();
        }else{
            $('.header').removeClass('fixedMenuOnScroll').fadeIn();
        }
    })

}




function fixedButtonShow(){

    let height = window.innerHeight;

    $('.fixed-buttons-wrapper').removeClass('fixed-buttons-wrapper-active');
    $(window).scroll(function(){
        if($(this).scrollTop()> height/2){
            $('.fixed-buttons-wrapper').addClass('fixed-buttons-wrapper-active').fadeIn();
        }else{
            $('.fixed-buttons-wrapper').removeClass('fixed-buttons-wrapper-active').fadeIn();
        }
    });

}


function mainMenu(){


    // Burger animation
    $('.burger').click(function(){

        let tl = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 200,
        })

        tl.add({
            targets: '.burger__line_top',
            translateX: 100,
            opacity: 0
        })
        tl.add({
            targets: '.burger__line_mid',
            translateX: 100,
            opacity: 0
        },40)
        tl.add({
            targets: '.burger__line_bot',
            translateX: 100,
            opacity: 0
        },80)

    })


    //Open MainMenu
    $('.burger').click(function(){

        let tl = anime.timeline({
            easing: 'easeInOutQuad',
            duration:300,
        })

        tl.add({
            targets:'.mainMenu',
            delay:400,
            right:'0%'
        })

    })


    //Animation Close Lines
    $('.burger').click(function(){

        anime({
            targets:'.close-line-left',
            duration:200,
            delay: 500,
            easing: 'easeInOutQuad',
            rotate:45
        })

        anime({
            targets:'.close-line-right',
            duration:200,
            delay: 500,
            easing: 'easeInOutQuad',
            rotate:-45
        })

    })


    //Animation close lines if click close icon
    $('.close').click(function(){

        anime({
            targets:'.close-line-left',
            duration:100,
            easing: 'easeInOutQuad',
            rotate:0
        })

        anime({
            targets:'.close-line-right',
            duration:100,
            easing: 'easeInOutQuad',
            rotate:0
        })

    })


    //Close MainMenu
    $('.close').click(function(){

        let tl = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 300,
            delay:100
        })

        tl.add({
            targets:'.mainMenu',
            right: '-100%'
        },200)

    })


    //Return burger
    $('.close').click(function(){

        let tl = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 300,
            delay:300
        })

        tl.add({
            targets: '.burger__line_top',
            translateX: 0,
            opacity: 1
        })
        tl.add({
            targets: '.burger__line_mid',
            translateX: 0,
            opacity: 1
        },40)
        tl.add({
            targets: '.burger__line_bot',
            translateX: 0,
            opacity: 1
        },80)

    })



}








function scrollTo(){

    $('.scrollTo').on('click', function(){

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration:600,
            easing: "linear"
        });


        return false;

    });

}


