//xử lý đóng mở menu
jQuery(document).ready(function($){
    if($(''))
        $(document).on('click', ".icon-close, .over", function() {
            $('.over, .nav').fadeOut(300 , function() {
                $('.over').remove();
            });
            $('.nav').hide();
            $('.icon-menu').show(100)
        return false;
        });
        $('.icon-menu').click(function(){
            $('.nav').show();
            $('body').append('<div class="over">');
            $('.over').fadeIn();
        })
 // Slide review 1
    $('#previous').on('click', function(){
    // Change to the previous Card
        $('#card_' + currentCard).stop().fadeOut(5);
        decreaseCard();
        $('#card_' + currentCard).stop().fadeIn(5);
        });
        $('#next').on('click', function(){
        // Change to the next Card
        $('#card_' + currentCard).stop().fadeOut(5);
        increaseCard();
        $('#card_' + currentCard).stop().fadeIn(5);
    });
    var currentCard = 1;
    var totalCards = 3;
    function increaseCard() {
        ++currentCard;
        if(currentCard > totalCards) {
            currentCard = 1;
        }
    }
    function decreaseCard() {
    /* Decrease currentCard by 1.
    * Resets to totalCards if smaller than 1
    */
        --currentCard;
        if(currentCard < 1) {
            currentCard = totalCards;
        }
    }
    window.setInterval(function() {
        $('#previous').click();
    }, 5000);

    function toggleNavbar(collapseID) {
        document.getElementById(collapseID).classList.toggle("hidden");
        document.getElementById(collapseID).classList.toggle("block");
      }
      var swiper = new Swiper(".mySwiper-slide", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          loop:"true",
          spaceBetween:32,
          coverflowEffect: {
            rotate: 0,
            
          },
          
        });
})

