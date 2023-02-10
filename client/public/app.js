const sections = document.querySelectorAll('.navbar ul li a');

function PageTransitions(){
    for(let i =0; i < sections.length; i++) {
        sections[i].addEventListener('click', function() => {
            let currentBtn = document.querySelectorAll('.navbar ul li a.active');
            currentBtn[0].classList = currentBtn[0].className.replace('active', '');
            this.className += 'active'
        })
    }
}

PageTransition();