// zmienne
let right = $('.next-slide');
let left = $('.prev-slide');
let slideShow = $('.slide-show');
let singleSlide = $('.single-slide');
let singleSlideWidth = singleSlide.length * 100 + '%';
let proportionSlide = 100 / singleSlide.length;
let globalCounter = 0;


// dynamiczna szerokość dla kontenera który jest obecnie niewidoczny
// slideShow.css('width', '100%');
slideShow.css('width', singleSlideWidth);

//szerokość na pojedynczego obrazka
singleSlide.css({'width': proportionSlide + '%' });

// ustawiamy margin dla obrazków
singleSlide.each(function(index, element){
    $(element).css({'margin-left': index *proportionSlide + '%'});
});

left.click(function() {
    // console.log('prev');
    slide(globalCounter - 1);
});

right.click(function() {
    // console.log('next');
    slide(globalCounter + 1);
});

function slide(counter) {
    if (counter < 0 || counter >= singleSlide.length) {
        return;
    }

    let slideCaption = slideShow.find('.slide-caption').eq(counter);
    slideCaption.fadeOut();

    let marginLeft = (counter * (-100)) + '%';
    console.log(marginLeft);
    
    slideShow.animate({marginLeft: marginLeft}, 200, function() {
        slideCaption.fadeIn();
        globalCounter = counter;
    });   
}
