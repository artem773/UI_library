import $ from './lib/lib';

$('#first').click(()=> {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(()=> {
    $('.w-500').eq(1).fadeToggle(800);
});

$('button').eq(2).on('click', ()=>{
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="drop-down-menu-btn">Drop-down button</button>
        <div class="dropdown-menu" data-toggle-id="drop-down-menu-btn">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action_2</a>
            <a href="#" class="dropdown-item">Action_3</a>
        </div>
    </div>
    `
);

$('.dropdown-toggle').dropdown();