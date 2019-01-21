// JavaScript Document
Integer parallaxPage = 0;

function setPage(Integer pagenum){
    console.log(pagenum)
}

inView('.intro').on('enter', console.log(1));
inView('.static1').on('enter', console.log(2));
inView('.bg2').on('enter', console.log(3));
inView('.static2').on('enter', console.log(4));
