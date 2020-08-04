// ==UserScript==
// @name         Explosives Mod
// @namespace    https://github.com/Michal2SAB
// @version      1.0
// @description  Increases the size of grenades, making it easier to avoid them. Makes it very easy to notice mines.
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

var grenades = webpackJsonp([], null, ["035f2ecb"]);

// Grenades

grenades.frag.worldImg.scale = .25
grenades.frag.handImg.cook.right.scale = .30
grenades.frag.handImg.cook.left.scale = .30

grenades.mirv.worldImg.scale = .26
grenades.mirv.handImg.cook.right.scale = .31
grenades.mirv.handImg.cook.left.scale = .31

grenades.mirv_mini.worldImg.scale = .25

grenades.martyr_nade.worldImg.scale = .25

grenades.strobe.worldImg.scale = .25
grenades.strobe.handImg.cook.right.scale = .31
grenades.strobe.handImg.cook.left.scale = .31

grenades.snowball.worldImg.scale = .25
grenades.snowball.handImg.cook.right.scale = .31

grenades.water_balloon.worldImg.scale = .25
grenades.water_balloon.handImg.cook.right.scale = .30

grenades.snowball_heavy.worldImg.scale = .15

grenades.potato.worldImg.scale = .25
grenades.potato.handImg.cook.right.scale = .31

grenades.potato_heavy.worldImg.scale = .15

grenades.potato_cannonball.worldImg.scale = .15

grenades.bomb_iron.worldImg.scale = .25

grenades.motherShip_cannon_shot.worldImg.scale = .25

grenades.mine.worldImg.scale = .25
grenades.mine.handImg.cook.right.scale = .31

grenades.skitternade.worldImg.scale = .25
grenades.skitternade.handImg.cook.right.scale = .29
