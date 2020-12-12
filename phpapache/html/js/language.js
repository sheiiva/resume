/** 
 * ===================================================================
 * javascript languages scripts
 *
 * ------------------------------------------------------------------- 
 *
 * Copyright (c) 2020 Corentin ROZET
 * 2020-11-12
 *
 */

var language;

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('us') : false;
    $.ajax({
        url:'/language/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
        success: function(lang) {language = lang ; setCurrentLanguage(lang)}
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage()
    for (var value in language) {
        $('#'+value).text(language[value])
    }
}

function setCurrentLanguage(languages) {
    var url = 'https://www.countryflags.io/' + localStorage.getItem('language') + '/flat/32.png';
    var callUrl = "url(" + url + ")";
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = "#selected-lang::before {background-image: " + callUrl + ";}";
    document.getElementById('selected-lang').innerHTML = languages[localStorage.getItem('language')]
}