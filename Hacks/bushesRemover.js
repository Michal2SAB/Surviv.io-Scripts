// ==UserScript==
// @name         Surviv.io trees and bushes remover
// @namespace    https://greasyfork.org/en/scripts/408085-surviv-io-trees-and-bushes-remover
// @version      1.0
// @description  Cuts trees and makes the bushes really small, exposing any players who hide under them or is near them.
// @author       Michal2SAB
// @match        http*://surviv.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Some important shit for this whole thing to work

var shits = webpackJsonp([], null, ["03f4982a"]);

// trees

shits.tree_01.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_02.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_03.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_03sv.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_05.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_05b.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_05c.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_06.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_07.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_07sp.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_07spr.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_07su.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08b.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08c.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08f.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08sp.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08spb.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08spc.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08spr.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08su.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_08sub.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_09.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_10.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_11.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_12.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_13.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_14.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_15.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_16.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_17.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"
shits.tree_18.img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg"

// bushes

shits.bush_01.img.scale = 0.16
shits.bush_01b.img.scale = 0.16
shits.bush_01cb.img.scale = 0.16
shits.bush_01f.img.scale = 0.16
shits.bush_01sv.img.scale = 0.16
shits.bush_01x.img.scale = 0.16
shits.bush_04.img.scale = 0.16
shits.bush_04cb.img.scale = 0.16
shits.bush_05.img.scale = 0.16
shits.bush_06.img.scale = 0.16
shits.bush_06b.img.scale = 0.16
shits.bush_07.img.scale = 0.06
shits.bush_07sp.img.scale = 0.06
shits.bush_07x.img.scale = 0.06
shits.bush_08.img.scale = 0.16
shits.bush_09.img.scale = 0.16
shits.bush_10a.img.scale = 0.16
})();

// changing the alpha of images will kick you out of game so the above method is the only way to see bushes & trees
// and still see players hiding in them. Actually maybe it's not, but I made this really quick and I don't care enough rn
// to test more things out. Enjoy hacking noob.
