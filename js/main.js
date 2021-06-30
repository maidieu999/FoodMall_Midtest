const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e){
    cursor.setAttribute("style","top:"+(e.pageY - 15)+"px; left:"+(e.pageX - 15)+"px;");
})
document.addEventListener('click',function(){
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand')
    },500);
})
// categories section script
$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})