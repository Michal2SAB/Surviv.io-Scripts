 
Greasy Fork
Michal2SAB [ Sign out ] 
English (en)
Scripts Forum Help More
Info
Code
History
Feedback (0)
Stats
Derivatives
Update
Delete
Admin
Explosives Mod
Increases the size of throwables, making it easier to avoid them. Makes it very easy to notice mines.

Install this script?
Ask a question, post a review, or report the script.
// ==UserScript==
// @name         Explosives Mod
// @namespace    https://github.com/Michal2SAB
// @version      2.0
// @description  Increases the size of throwables, making it easier to avoid them. Makes it very easy to notice mines.
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

var throwables = ""

// Some important shit for this whole thing to work

var func = {
    webpack_inject: (w, e, get) => {
        throwables = get("035f2ecb")
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

Object.keys(throwables).forEach(function(key) {
    throwables[key].worldImg.scale = .25
})
})();
