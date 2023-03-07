import $ from './lib/lib';

$('button').on('click', function(){
    $('div').eq(1).toggleClass('active');
});

$('div').click(function(){
    console.log($(this).index());
})

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.find_mes'));

// console.log($('.more').eq(1).siblings());
// console.log($('.find_me').siblings());
$('button').fadeIn(1800);