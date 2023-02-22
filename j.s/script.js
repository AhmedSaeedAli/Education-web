$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>50){
        $("nav").addClass("bg-dark");
        $("#btnUp").fadeIn(2000);
    }else{
        $("nav").removeClass("bg-dark");
        $("#btnUp").fadeOut(2000);
    }
}
)
$("#btnUp").click(function(){
    $(window).scrollTop(0);
})





let asked = document.querySelectorAll('.asked-content');
asked.forEach(asked =>{
    asked.addEventListener('click',()=>{
        asked.classList.toggle('open');
        let icon=asked.querySelector('.question i')
        if(icon.className === 'fa-sharp fa-solid fa-plus')
        {
            icon.className='fa-solid fa-minus'
        } else{
            icon.className= 'fa-sharp fa-solid fa-plus'
        }
    })
})