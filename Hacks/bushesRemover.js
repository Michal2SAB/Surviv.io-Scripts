// ==UserScript==
// @name         Surviv.io trees and bushes remover
// @namespace    https://github.com/Michal2SAB
// @version      2.0
// @description  Cuts trees and makes the bushes really small, exposing any players who hide under them or is near them.
// @author       Michal2SAB
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var shits = ""

// Some important shit for this whole thing to work

var func = {
    webpack_inject: (w, e, get) => {
        shits = get("03f4982a")
    },
};

if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
}
    
// do the magic

Object.keys(shits).forEach(function(key) {
    if(key.match(/tree/g)) {
        shits[key].img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
    } else if(key.match(/bush/g)) {
        shits[key].img.scale = 0.16
    } else if(key.match(/table/g)) {
        shits[key].img.sprite = ""
    }
})
})();
