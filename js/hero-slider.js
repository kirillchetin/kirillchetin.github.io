function heroSlider(){

    let tl = anime.timeline({
        easing:'easeInOutQuad',
        duration:800,
        loop:true,
    })


    //slide-item 1
    tl.add({
        targets: '.js-slide-1l, .js-slide-1r',
        height: '0vh'
    },5000)

    tl.add({
        targets: '.js-slide-1l, .js-slide-1r',
        height:'100vh',
        opacity:0,
        duration:1
    })


    //slide-item 2
    tl.add({
        targets: '.js-slide-2l, .js-slide-2r',
        height: '0vh'
    },'+=5000')

    tl.add({
        targets: '.js-slide-2l, .js-slide-2r',
        height:'100vh',
        opacity:0,
        duration:1
    })


    //slide-item 3
    tl.add({
        targets: '.js-slide-3l, .js-slide-3r',
        height: '0vh'
    },'+=5000')

    tl.add({
        targets: '.js-slide-3l, .js-slide-3r',
        height:'100vh',
        opacity:0,
        duration:1
    })


    //slide-item 4
    tl.add({
        targets: '.js-slide-4l, .js-slide-4r',
        height: '0vh'
    },'+=5000')

    tl.add({
        targets: '.js-slide-4l, .js-slide-4r',
        height:'100vh',
        opacity:0,
        duration:1
    })


    //slides-return
    tl.add({
        targets:'.js-slide-1l, .js-slide-1r, js-slide-2l, .js-slide-2r, js-slide-3l, .js-slide-3r, js-slide-4l, .js-slide-4r',
        opacity:1,
        duration:10,
    })

}


heroSlider();