'use strict';
//Make things easy
function delAds(eID){
    if (document.getElementById(eID)){
        document.getElementById(eID).remove();
    }
}
//Do the job
setInterval(function() {
    var adsA=document.getElementsByClassName("ad-block-leaderboard-bottom")[0];
    delAds("start-top-left");
    delAds("leaderboard-front");
    delAds("ad-block-left");
    delAds("start-bottom-left");
    delAds("news-block");
    delAds("social-share-wrapper");
    delAds("social-share-block");
    delAds("adunit");
    delAds("ui-stats-ad-container-desktop");
    delAds("surviv-io_728x90")
    if(adsA){
        adsA.remove();
    }
},1000);
