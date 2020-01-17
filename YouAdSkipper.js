const host_url = location.host;

if (host_url === "www.youtube.com") {
    setInterval(
        function () {
            try {
                const elem1 = document.getElementsByClassName("ytp-ad-overlay-close-container");
                elem1[0].click();
            } catch (e) {
                ;
            }
            try {
                const elem2 = document.getElementsByClassName("ytp-ad-skip-button-container");
                elem2[0].click();
            } catch (e) {
                ;
            }
        }, 1000
    )
}
