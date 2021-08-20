const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () =>{
        scrolled = window.scrollY;

        if(scrolled){
            navbar.classList.add('scroll');
        }else{
            navbar.classList.remove('scroll');
        }

        console.log(scrolled)

});
