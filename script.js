const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffrot =0;

    elem.addEventListener("mouseleave" , function(dets){
        
  
        
        gsap.to(elem.querySelector("img") ,{
            opacity:0,
            ease : Power3,
           duration:.5,
        } );
    });

    elem.addEventListener("mousemove" , function(dets){
        
        
        var diff = dets.clientY - elem.getBoundingClientRect().top;
       
        diffrot = dets.clinetX - rotate;
        rotate = dets.clientX;
       var rot=gsap.utils.clamp(-20,20, diffrot);
        gsap.to(elem.querySelector("img") ,{
            opacity:1,
            ease : Power3,
            top:dets.clientY-elem,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20 , diffrot),
        } );
    });
});