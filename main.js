//We set the height in closeSection and openSection to itself first to override 'auto'
//Auto doesn't use CSS animations, so we override it for a bit

var tweets = ['lanfranc', 'william', 'money', 'france'];
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
