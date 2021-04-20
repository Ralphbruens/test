$('.font-tester-slide').on('change', function () {
    var v = $(this).val();
    $('.font-tester').css('font-size', v + 'px')
    $('.font-size-num').html(v);
});

$('.font-tester-slide-2').on('change', function () {
    var v = $(this).val();
    $('.font-tester-2').css('font-size', v + 'px')
    $('.font-size-num-2').html(v);
});

$('.font-tester-slide-3').on('change', function () {
    var v = $(this).val();
    $('.font-tester-3').css('font-size', v + 'px')
    $('.font-size-num-3').html(v);
});

$('.font-tester-slide-4').on('change', function () {
    var v = $(this).val();
    $('.font-tester-4').css('font-size', v + 'px')
    $('.font-size-num-4').html(v);
});