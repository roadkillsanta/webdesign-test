// JavaScript Document
Integer parallaxPage = 0;

function setPage(Integer pagenum){
    console.log(pagenum)
}

function onPageLoad(){
    inView('.intro').on('enter', console.log(1));
    inView('.static1').on('enter', console.log(2));
    inView('.bg2').on('enter', console.log(3));
    inView('.static2').on('enter', console.log(4));
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}



