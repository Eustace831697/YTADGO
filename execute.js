
var skipButton;

const cycle = setInterval(function () {

    skipButton = document.querySelectorAll('.ytp-skip-ad-button');
    console.log(skipButton);

    if (skipButton.length > 0) {
        skipButton[0].click();
        console.log('AD_GOGO');
    }

}, 2000);

