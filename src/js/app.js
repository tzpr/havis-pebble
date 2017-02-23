/**
 * Welcome to Pebble.js!
 *
 */

var UI = require('ui');
var taxons = require('havis/taxon-data');
var localStorage = require('havis/local-storage');
var inputWindow = require('havis/input-window');


var main = new UI.Card({
    title: 'Havis 0.9',
    body: 'Terve! Valitse laji ja tee merkintä.',
    action: {
        up: 'images/menu_icon_a.png',
        down: 'images/menu_icon_b.png',
        select: 'images/menu_icon_middle.png'
    }
});

main.show();

main.on('click', 'select', function () {
    var storageObject = readFromLocalStorage('havis');

    var menu = buildObservationHistoryMenu(storageObject);

    menu.show();

    menu.on('select', function (e) {
        showObservationDetails(e.item);
    });
});

main.on('click', 'up', function (e) {
    var menu = new UI.Menu({
        sections: [{
            items: [
                {
                    title: '     A     '
                },
                {
                    title: '     E     '
                },
                {
                    title: '     O     '
                },
                {
                    title: '     U     '
                }
            ]
        }]
    });

    menu.on('select', function (e) {
        var menu = buildMenu(e.item.title.trim());

        menu.on('select', function (e) {
            var menu = buildMenu(e.item.title.trim());

            menu.on('select', function (e) {
                inputWindow(e.item.title.trim(), e.item.name);
            });
            menu.show();
        });
        menu.show();
    });
    menu.show();
});

main.on('click', 'down', function (e) {
    var menu = new UI.Menu({
        sections: [{
            items: [
                {
                    title: '     B     '
                },
                {
                    title: '     C     '
                },
                {
                    title: '     D     '
                },
                {
                    title: '     F     '
                },
                {
                    title: '     G     '
                },
                {
                    title: '     H     '
                },
                {
                    title: '     J     '
                },
                {
                    title: '     L     '
                },
                {
                    title: '     M     '
                },
                {
                    title: '     N     '
                },
                {
                    title: '     P     '
                },
                {
                    title: '     R     '
                },
                {
                    title: '     S     '
                },
                {
                    title: '     T     '
                },
                {
                    title: '     V     '
                },
                {
                    title: '     X     '
                }
            ]
        }]
    });

    menu.on('select', function (e) {
        var menu = buildMenu(e.item.title.trim());

        menu.on('select', function (e) {
            var menu = buildMenu(e.item.title.trim());

            menu.on('select', function (e) {
                inputWindow(e.item.title.trim(), e.item.name);
            });
            menu.show();
        });
        menu.show();
    });
    menu.show();
});


function buildMenu(selected) {
    var names,
        nameItems = [],
        i = 0;

    if (selected && selected.length === 1) {
        names = taxons.genusesByLetter(selected);
        for (i; i < names.length; i += 1) {
            nameItems.push({
                title: names[i].genus,
                subtitle: 'lajien lkm: ' + names[i].laji_lkm
            });
        }
    } else {
        names = taxons.birdsByGenus(selected);
        for (i; i < names.length; i += 1) {
            nameItems.push({
                title: names[i].lyhenne,
                subtitle: names[i].nimi,
                name: names[i].nimi
            });
        }
    }

    return new UI.Menu({
        sections: [{
            items: nameItems
        }]
    });
}

function saveToLocalStorage(key, entryObject) {
    console.log('saveToLocalStorage: ' + JSON.stringify(entryObject));
    localStorage.setItem('havis', entryObject);
}

function readFromLocalStorage(key) {
    var items = localStorage.getItems() || [];
    console.log('readFromLocalStorage: ' + JSON.stringify(items));
    return items;
}

function buildObservationHistoryMenu(observationObject) {
    var items = [];

    function convertMillis(time) {
        console.log(' convertMillis: ' + time);
        var date = new Date(time);
        return date.toLocaleDateString();
    }

    for (var key in observationObject) {
        if (observationObject.hasOwnProperty(key)) {
            items.push({
                title: observationObject[key].species,
                subtitle: convertMillis(observationObject[key].time) +
                ' lkm: ' + observationObject[key].count,
                location: observationObject[key].location
            });
        }
    }

    return new UI.Menu({
        sections: [{
            items: items
        }]
    });
}

function showObservationDetails(item) {
    var card = new UI.Card({
        title: item.title,
        body: item.subtitle.slice(0, 10) + '\n' +
        item.subtitle.slice(10) + '\n' +
        item.location
    });
    card.show();
}