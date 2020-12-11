/** 
 * ===================================================================
 * javascript languages scripts
 *
 * ------------------------------------------------------------------- 
 */

/* Copyright (c) 2020 Corentin ROZET
 * 2020-11-12
 */

var language;

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
    url:'/language/' + localStorage.getItem('language') + '.json',
    dataType: 'json', async: false,
    success: function(lang) {language = lang}
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage()
    for (var value in language) {
    $('#'+value).text(language[value])
    }
}