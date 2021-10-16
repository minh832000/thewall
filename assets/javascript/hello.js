jQuery(document).ready(function($){
    //xử lý đóng mở menu
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



 // Slide review
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

        --currentCard;
        if(currentCard < 1) {
            currentCard = totalCards;
        }
    }
    window.setInterval(function() {
        $('#previous').click();
    }, 5000);


// Sự kiện thay đổi thông tin giới thiệu công việc
//Set cho mấy cái kia ẩn hết nè
$('#finance-introduce').hide(200);
//xử lý bấm từng cái chứ sao giờ
$(document).on('click', "#job-1", function() {
    $('#finance-introduce').hide(400);
    $('#design-introduce').show(400);
})
$(document).on('click', "#job-2", function() {
    $('#design-introduce').hide(400);
    $('#finance-introduce').show(400);
})



// slideshow swiper
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

