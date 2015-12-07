/*
color scheme

https://color.adobe.com/create/color-wheel/?base=2&rule=Custom&selected=0&name=800px-TinternAbbeyandCourtyard&mode=rgb&rgbvalues=0.32941176470588235,0.592156862745098,0.7647058823529411,0.5137254901960784,0.7098039215686275,0.8431372549019608,0.5372549019607843,0.5411764705882353,0.17647058823529413,0.45098039215686275,0.42745098039215684,0.1450980392156863,0.6549019607843137,0.5490196078431373,0.45098039215686275&swatchOrder=0,1,2,3,4

*/

//http://www.history.ac.uk/reviews/review/1480
//15,000 pounds was anglo wealth in 1000
$(document).ready(function () {
    var tweets = ['lanfranc', 'william', 'money'];
    var tweetDuration = 5;
    var defaultHeight = 62;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.info').click(function (event) {
        var test = $(this).height();
        if ($(this).outerHeight() === defaultHeight) {
            $(this).css('height', $(this)[0].scrollHeight + 'px');
        } else {
            $(this).css('height', defaultHeight);
        }
    })

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

    tweetSwitcher(-1);

})