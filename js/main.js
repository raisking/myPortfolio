$("#header-div").sticky();
var randomQuote = [ 
    "\"Always do your best. What you plant now, you will harvest later. - Og Mandino\"",
    "\"The secret of getting ahead is getting started. - Mark Twain\"",
    "\"Be kind whenever possible. It is always possible. - Dalai Lama\"", 
    "\"Failure is the condiment that gives success its flavor. ~ Truman Capote\"",
    "\"You may have to fight a battle more than once to win it. ~ Margaret Thatcher\"",
    "\"The successful warrior is the average man, with laser-like focus. ~ Bruce Lee\"",
    "\"Whenever you find yourself on the side of the majority, it is time to pause and reflect. ~ Mark Twain\"",
    "\"Whatever the mind of man can conceive and believe, it can achieve. – Napoleon Hill\"",
    "\"Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire which transcends everything.– Napoleon Hill\"",
    "\"Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi\"",
    "\"It does not matter how slowly you go as long as you do not stop. - Confucius\"",
    "\"It always seems impossible until it's done. - Nelson Mandela\"",
    "\" “You just can’t beat the person who never gives up.” —Babe Ruth\""
];

var random = Math.floor(Math.random() * randomQuote.length);
document.getElementById('random-quote').innerHTML = randomQuote[random];    

$(document).on('click','a[href^="#header-div"], a[href^="#intro-full-stack"],a[href^="#my-recent-project"], a[href^="#contact-right"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});

//RANDOM BACKGROUND IMAGE 
var images = ['usflag.jpg','usflag1.jpg','usflag2.jpg','usflag3.jpg',
'usflag4.jpg','usflag5.jpg','usflag6.jpg',
'wallpaper.jpg','wallpaper1.jpg','wallpaper2.jpg',
'wallpaper4.png',
'wallpaper5.gif'
];
 $('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


// $(".myName").hide();
// $(window).resize(function(){    
//     let width = $(window).width();
//     if (width < 1130 ){
//         $('.threeD').hide();
//         $('.myName').show();
//     } else if (width > 1130){
//         $('.threeD').show();
//         $('.myName').hide();
//     }
// })
$('#prakashrai-color').addClass('animated fadeIn');
$('.about-me').addClass('animated fadeIn');

// $(document).ready(function(){
//     $(".scroll").hide();
//     $(".seeMore").mouseover(
//         function(){
//             $(".scroll").show();
//             $(".seeMore").hide();
//         }
//     )
//     $(".scroll").mouseout(
//         function(){
//             $(".seeMore").show();
//             $(".scroll").hide();
//         }
//     )
// })

