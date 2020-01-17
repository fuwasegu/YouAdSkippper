const doSkipAndClose = () => {
    const close_button = document.getElementsByClassName("ytp-ad-overlay-close-container");
    const skip_button = document.getElementsByClassName("ytp-ad-skip-button-container");
    if (close_button) {
        close_button[0].click();
    }
    if (skip_button) {
        skip_button[0].click();
    }
}

setInterval(doSkipAndClose(), 1000);