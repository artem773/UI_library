import $ from './lib/lib';

$('#first').click(()=> {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').click(()=> {
    $('.w-500').eq(1).fadeOut(800);
});

$('button').eq(2).on('click', ()=>{
    $('.w-500').fadeOut(800);
});