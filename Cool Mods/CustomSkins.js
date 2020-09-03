
/*** contributors
 * garlic
 * preacher
 * and thanks to Michal2SAB for the webpack inject code
***/


// make console.log() work
console.log = console.info;

// global declarartion
window.ceilings = ""
window.hands = ""
window.skins = ""
window.SkinRules = {};



window.skinsArr = ["outfitFireball", "outfitMecha", "outfitDiamondy", "outfitAstronaut", "outfitMojo", "outfitGiraffe", "outfitUrbanCamo", "outfitGeometric", "outfitMilitary", "outfitClaymore", "outfitSunset", "outfitSplotchfest", "outfitDonut", "outfitRedLeader"];

// Michal2SAB's code
// no idea how this work, maybe garlic could explain it

window.webpackR;

var func = {
    webpack_inject: (w, e, get) => {
        ceilings = get("63d67e9d");
        skins = get("63d67e9d");
        hands = get("ccb6ad93");
      window.webpackR = get.bind(this)
    },
};

if (typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
    load()
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
    load();
}

// _SKIN and _Hand must be a String 
// ex: skins["outfitFireball"]

window.assignSkin = function (_SKIN) {

    if (!skins[_SKIN]) return _SKIN + "doesn't exist"

    skins.outfitBase.accessory = {}
    skins.outfitBase.accessory.sprite = "";

    Object.assign(skins.outfitBase, skins[_SKIN]);

    return _SKIN
}

window.assignHand = function (_HAND) {

    if (!hands[_HAND]) return _HAND + "doesn't exist"

    hands.fists.handSprites = {};
    hands.fists.handSprites.spriteL = ""
    hands.fists.handSprites.spriteR = ""

    Object.assign(hands.fists, hands[_HAND]);

    return _HAND;
}

//	inject css
//	useless comment ik
injectCss();


function load() {
    // turn string into camel case
    String.prototype.toCamelCase = function () {
        return this.replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })
            .replace(/\s/g, "")
            .replace(/^(.)/, function ($1) {
                return $1.toLowerCase();
            });
    };
    // UI stuff
    let ehtml = `
										<div  class="custom-wrapper-random"> 
												olimpiqisgay)
												survivistrash))
										</div>
								`;
    const startMenuEle = document.querySelector("#start-menu");
    document.querySelector("div.pass-title").style.display = "none";
    document.querySelector("div.pass-body-container").style.display = "none";
    // startMenuEle.style.display = 'none';
    startMenuEle.insertAdjacentHTML("beforeend", ehtml);
    const customWrapperEle = document.querySelector(".custom-wrapper-random");
    customWrapperEle.innerHTML = `<div class="contents">
			<div class="tabs">
				<div class="tab" style="flex-basis: 80%;">Select Skin</div>
			</div>
			<div class="container content">
				<div class="skins"></div>
			</div>
			<div class="footer">
				<p>
					report bugs on
					<a href="https://discord.gg/WjXgrGa" target="_blank">Discord</a> 🐓
				</p>
			</div>
		</div>
		`;
    // Tabs
    const tabLinks = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".content");
    tabLinks[0].classList.add("active-tab");
    tabContents[0].classList.add("active-tab");
    tabLinks.forEach((tabLink, i) => {
        tabLink.addEventListener("click", () => {
            tabLinks.forEach((tabLink) => tabLink.classList.remove("active-tab"));
            tabContents.forEach((tabContent) =>
                tabContent.classList.remove("active-tab")
            );
            tabLink.classList.add("active-tab");
            tabContents[i].classList.add("active-tab");
        });
    });

    // generate SKINS UI
    const skinItems = document.querySelector(".skins");
    skinItems.addEventListener("click", applySkin); // apply skins and border on click
    skinItems.innerHTML = "";
  

      (function() {
  skins.outfitDonut = {}
  Object.assign(skins.outfitDonut, skins.outfitBase)
  skins.outfitDonut.name = "Donut Outfit"
  skins.outfitDonut.skinImg.baseSprite = "donut.img"
  skins.outfitDonut.anchor = {x:1,y:1}
})()
    function updatehtml() {
        skinHtml = "";

        skinsArr.forEach((obj) => {
            console.log(obj, skins[obj])
            let eee = `
										<div class="skin-item" id="${obj}">
												<img src="img/loot/${skins[obj].lootImg.sprite.replace(
                "img",
                "svg"
            )}" class="skin-img" />
												<h4 class="skin-name">${skins[obj].name}</h4>
										</div>
										`;
            SkinRules[obj] = () => {
                assignSkin(obj);
            };
            skinHtml += eee;
        });
        skinItems.innerHTML = skinHtml;
    }
    updatehtml();
}



// Skin Rules
function applySkin(e) {
    if (SkinRules.hasOwnProperty(e.target.id)) {
        SkinRules[e.target.id]();
        skinRemoveBorder();
        e.target.className += " active";
        console.log(SkinRules[e.target.id]);
    } else if (SkinRules.hasOwnProperty(e.target.parentElement.id)) {
        SkinRules[e.target.parentElement.id]();
        skinRemoveBorder();
        e.target.parentElement.className += " active";
        console.log(SkinRules[e.target.parentElement.id]);
    }
}

// removeBorder
function skinRemoveBorder() {
    skinItem = document.querySelectorAll(".skin-item");
    skinItem.forEach((item) => {
        item.classList.remove("active");
    });
}

// inject css

function injectCss() {
    const css = `.active { color: green; border: 2px solid #668e38;} .content, .pass-body-container  {display: none;}; .skin-name {margin: 10px;} .tab {display: flex !important;} .active-tab {display: block !important} .contents {display: flex; flex-direction: column; width: 100%; overflow-y: scroll; height: 100%;text-align: center; box-sizing: border-box;} .container {width: 100%; flex: 1 0 auto;} .skins, .accesory, .trees, .crates {display: flex; box-sizing: border-box; flex-wrap: wrap} .trees img {max-height: auto; max-width: 100%} .maps {display: flex; box-sizing: border-box; flex-wrap: wrap} .skin-item, .map-item {flex-grow: 1; flex-basis: 25%; position: relative; cursor: pointer; box-sizing: border-box; padding: 10px 0;} .tabs {display: flex !important;} .tab {display: inline-block !important; flex-grow: 1; padding: 10px; background: rgba(0, 0, 0, 0.28); cursor: pointer; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd;} #start-menu {padding: 0;} #social-share-block-wrapper {display: none;} .tab.active-tab {background: #000;} .footer {background-color: #000; padding: 10px; border-top: 1px solid #ddd; flex-shrink: 0;} .footer p {margin:0; text-align: center;} .tab.icon { padding: 0; display: flex !important; justify-content: center; align-items: center;} .svg-icon { width: 1.5em; height: 1.5em; } .svg-icon path, .svg-icon polygon, .svg-icon rect { fill: #ffffff; } .svg-icon circle { stroke: #ffffff; stroke-width: 1;} .container.set .modal-settings-item {padding: 10px 0; } .btn-custom {-webkit-animation-name:custom-pulse;-webkit-animation-duration:5s;border-bottom:4px solid #00448a}@-webkit-keyframes custom-pulse{from{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}25%{background-color:#318585;border-bottom-color:#208686;-webkit-box-shadow:0 0 18px #318585}75%{background-color:#675fe0;border-bottom-color:#312b8a;-webkit-box-shadow:0 0 18px #675fe0}to{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}}#deleteSkinItem { position: absolute; right: 2px;} .btn-submit { margin-left: 10px; padding: 5px 10px; font-size: 1.3rem; background: #191616; color: #fff; border: solid 1px #fff; border-radius: 4px;} #addSkinName { font-size: 1.5rem;} .custom-wrapper-random { width: 753.89px; height: 415.06px; border-radius: 10.27px; box-sizing: border-box; max-height: unset; display: -webkit-box; display: flex;}`
    let node = `<style>${css}</style>`;
    document.head.innerHTML += node;
}


setTimeout(() => {
  PIXI.utils.TextureCache["donut.img"].rotate=2
}, 3000)
