jQuery(document).ready(function($){
    //xử lý đóng mở menu
        $(document).on('click', ".overr", function() {
            $('.overr').fadeOut(300 , function() {
                $('.overr').remove();
            });
            $('.filter').hide(300);
        return false;
        });
        $('.btn-filter').click(function(){
            $('.filter').show(300);
            $('body').append('<div class="overr">');
            $('.overr').fadeIn(300);
        })
        $(document).on('click', "i", function() {
            var numberId = this.id.slice(-1);
            var id='#'+ this.id;
            var nameClass = ".form-"+numberId;
            $(nameClass).toggle();
            var degCurrent=$(id).css("transform");
            console.log(degCurrent);
            $(this).css('transform', "rotate(180deg)")
        })
})