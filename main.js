/*
color scheme

https://color.adobe.com/create/color-wheel/?base=2&rule=Custom&selected=0&name=800px-TinternAbbeyandCourtyard&mode=rgb&rgbvalues=0.32941176470588235,0.592156862745098,0.7647058823529411,0.5137254901960784,0.7098039215686275,0.8431372549019608,0.5372549019607843,0.5411764705882353,0.17647058823529413,0.45098039215686275,0.42745098039215684,0.1450980392156863,0.6549019607843137,0.5490196078431373,0.45098039215686275&swatchOrder=0,1,2,3,4

*/

//http://www.history.ac.uk/reviews/review/1480
//15,000 pounds was anglo wealth in 1000

//We set the height below to itself first to override 'auto'
//Auto doesn't use CSS animations, so we override it for a bit

var tweets = ['lanfranc', 'william', 'money'];
var sections = $('.info');
var tweetDuration = 5;
//How many seconds the transition lasts for in the css
var animationDuration = 1;
//How much padding .info has
var elementPadding = 5;
var mobileNavOpen = false;

function closeSection(section) {
    $(section).addClass('inProgress');
    $(section).css('height', $(section).height() + 'px');
    var id = $(section).attr('id');
    var content = $('#' + id + ' .content');
    var h1 = $('#' + id + ' h1');
    $(section).css('height', h1.height() + 'px');
    setTimeout(function () {
        content.css('display', 'none');
        $(section).removeClass('active');
        $(section).removeClass('inProgress');
        $(section).css('height', 'auto');
    }, animationDuration * 1000)
}

//We set the height below to itself first to override 'auto'
//Auto doesn't use CSS animations, so we override it for a bit
function openSection(section) {
    $(section).addClass('inProgress');
    $(section).css('height', $(section).height() + 'px');
    var id = $(section).attr('id');
    var content = $('#' + id + ' .content');
    content.css('display', 'block');
    $(section).css('height', $(section)[0].scrollHeight - (elementPadding * 2) + 'px');
    setTimeout(function () {
        $(section).removeClass('inProgress');
        $(section).addClass('active');
        $(section).css('height', 'auto');
    }, animationDuration * 1000)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setMobileNav() {
    if (mobileNavOpen) {
        closeSection($('#mobileNav'));
    } else {
        openSection($('#mobileNav'));
    }
    mobileNavOpen = !mobileNavOpen;
}

function tweetSwitcher(index) {
    if (index < tweets.length - 1)
        index++;
    else
        index = 0;
    $('#tweetWatcher').css('background', 'url(images/' + tweets[index] + 'tweet.jpg' + ')');
    setTimeout(function () {
        tweetSwitcher(index);
    }, tweetDuration * 1000);
}

$(document).ready(function () {


    //On click open the section and close all the others
    $('.info').click(function (event) {
        if ($(this).hasClass('inProgress'))
            return;

        if ($(this).hasClass('active')) {
            closeSection(this);
        } else {
            openSection(this);
        }
        for (var i = 0; i < sections.length; i++) {
            var element = sections[i];
            if ($(this).attr('id') != $(element).attr('id')) {
                closeSection(element);
            }
        }
    })

    setTimeout(function () {
        openSection($('.info')[0]);
    })

    tweetSwitcher(getRandomInt(-1, tweets.length - 1));

})
