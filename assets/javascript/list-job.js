jQuery(document).ready(function($){
    //xử lý đóng mở menu
        $(document).on('click', ".overr", function() {
            $('.overr').fadeOut(300 , function() {
                $('.overr').remove();
            });
            $('.filter').hide(300);
        return false;
        });
        // $('.btn-filter').click(function(){
        //     $('.filter').show(300);
        //     $('body').append('<div class="overr">');
        //     $('.overr').fadeIn(300);
        // })
        
        // $(document).on('click','.icon-save', function(){
        //     // var idIcon
        //     console.log($(this).css('color'));
        // })
})