$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }

})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});




$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


// for counter

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const section = document.querySelector('.doctor-message');

    const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = target / 200;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}+`;
            setTimeout(() => updateCounter(counter), 20);
        } else {
            counter.innerText = `${target}+`;
        }
    };

    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    counter.innerText = '0+';
                    updateCounter(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // observer.observe(section);
});

// Initialize counters from localStorage or default to 0
function initializeCounters() {
    const counters = ['club1-counter', 'club2-counter', 'club3-counter', 'club4-counter'];

    counters.forEach(counterId => {
        const counterElement = document.getElementById(counterId);
        const savedValue = localStorage.getItem(counterId);
        counterElement.textContent = savedValue ? parseInt(savedValue) : 0;
    });
}

// Function to increase the counter and save it in localStorage
function increaseCounter(counterId, redirectUrl) {
    const counterElement = document.getElementById(counterId);
    let currentValue = parseInt(counterElement.textContent);
    const newValue = currentValue + 1;
    counterElement.textContent = newValue;

    // Save the new value in localStorage
    localStorage.setItem(counterId, newValue);

    // Redirect to the specified URL
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 200); // Optional delay to let the user see the counter increment
}

// Initialize counters when the page loads
document.addEventListener('DOMContentLoaded', initializeCounters);

