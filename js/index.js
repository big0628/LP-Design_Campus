window.onload = () => {
    /*******************************
     *        accordition part
     ******************************/
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display == "flex")
                panel.style.display = "none";
            else
                panel.style.display = "flex";
        });
    }
     /*******************************
     *         Scroll event part
     ******************************/
    window.addEventListener('scroll', function() {
        var btn_top = document.getElementById("btn-top");
        if (window.scrollY > 100) {
            btn_top.style.display = "block";
        } else {
            btn_top.style.display = "none";
        }
    });
}
/*******************************
 *       set scrollY into 0
 ******************************/

function goTopPosition(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}