let rootNode = document.getElementById('root');

function renderPageAllTanks(obj) {
    let el, html, i;

    window.location.hash = '';
    html = '<div class="thumbnails view container">';
    html += '<h1>Most popular tanks</h1><ul id="view--tanks" class="row">';

    for (i in obj) {
        el = obj[i];

        html += '<li class="col-2"><div class="li-item">';

        html +=
            '<div class="field--image img-responsive"><img src="' + el.preview + '" alt=""></div>' +
            '<div class="description">' +
                '<span class="field--country"><img src="' + el.country_image + '" title="' + el.country.toUpperCase() + '" alt=""></span> ' +
                '<span class="field--model">' + el.model + '</span>' +
            '</div>';

        html += '</div></li>';
    }

    html += '</ul></div>';

    return html;
}

function renderPageCurrentTank(obj, item) {
    let el, html, settings;

    el = obj[item];
    settings = renderTankSettings(el.details);
    window.location.hash = el.model.toLowerCase().replace(/ /g, '-');

    html = '<div class="tank-details container">';
    html += '<h1><img src="' + el.country_image + '" title="' + el.country.toUpperCase() + '" alt=""> ' + el.model.toUpperCase() + ' (level ' + el.level + ')</h1>';

    html +=
        '<div class="row">' +
            '<div class="col-4">' +
                '<div class="block--title"><h3>Preview</h3></div>' +
                '<div class="field--image img-responsive"><img src="' + el.preview + '" alt=""></div>' +
            '</div>' +
            '<div class="col-8">' +
                '<div class="block--title"><h3>Characteristic</h3></div>' +
                '<div class="tank-settings">' + settings + '</div>' +
            '</div>' +
        '</div>';

    html +=
        '<div id="button--back">' +
            '<button onclick="backToPrev()">Back to list view</button>' +
        '</div>';

    html += '</div>';

    return html;
}

function renderTankSettings(obj) {
    let html, key;

    html = '<table>';

    for (key in obj) {
        html += '<tr><td>' + key.replace(/_/g, ' ') + '</td><td>' + obj[key] + '</td></tr>';
    }

    html += '</table>';

    return html;
}

function renderHtml(fn) {
    let tmp;

    tmp = document.createElement('div');
    tmp.innerHTML = fn;
    tmp = tmp.firstChild;
    rootNode.appendChild(tmp);

    return rootNode;
}

function openTankSettings(id) {
    let ul = document.getElementById(id);
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {

        li[i].onclick = function() {
            rootNode.innerHTML = '';
            renderHtml(renderPageCurrentTank(tanks, i));
        }
    }

    return false;
}

function backToPrev() {
    rootNode.innerHTML = '';
    renderHtml(renderPageAllTanks(tanks));
    openTankSettings('view--tanks');

    return false;
}

renderHtml(renderPageAllTanks(tanks));
openTankSettings('view--tanks');