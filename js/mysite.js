var slideIndex =0;
autoShow();
function autoShow(){
   
    var slides = document.getElementsByClassName('slider')
    
    for(var i=0; i <slides.length; i++){
        slides[i].style.display='none';
    }
    slideIndex++;
    if(slideIndex > slides.length){ 
        slideIndex=1;
    }
    slides[slideIndex-1].style.display='block';
    setTimeout(autoShow, 3000);
}