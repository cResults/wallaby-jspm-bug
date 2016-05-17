//console.log("loading test-main-karma");
window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;

require([
    'jquery',
    'knockout',
    'q',
    //'form/viewer/windowTools',
    //'form/viewer/form',
    //'form/viewer/autoSave/autoSave'
],
function ($, ko, Q) {

    console.log('TEST RUN AT ' + (new Date).toLocaleTimeString() + ' ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ');

    /*Global Loaders*/
    window.$ = $;
    window.ko = ko;
    window.Q = Q;
});