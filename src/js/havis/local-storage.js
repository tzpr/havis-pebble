
var Settings = require('../settings');


var localStorage = (function ls() {
    var items = [];

    function setItem(key, item) {
        console.log('localStorage: setItem:' + items.length);
        if (key) {
            Settings.data(key, item);
        } else {
            Settings.data(item.time, item);
        }
    }

    function getItem(key) {
        console.log('localStorage: getItem:' + key);
        return Settings.data(key);
    }

    function getItems() {
        return Settings.data();
    }

    // this expedition choice naming is a bit disturbing... maybe should change in teh future
    function saveExpeditionId(id) {
        setItem('expeditionId', id);
    }

    function previousExpeditionId() {
        var e = getItem('expeditionId');
        if (e === undefined || e === null || e === '') {
            return undefined;
        }
        return e;
    }

    function clear(key) {
        if (key) {
            setItem(key, null);
        } else {
            var observationObject = getItems();

            for (var property in observationObject) {
                if (observationObject.hasOwnProperty(property)) {
                    observationObject[property] = null;
                }
            }
        }
    }

    // public api
    return {
        setItem: setItem,
        getItem: getItem,
        getItems: getItems,
        clear: clear,
        saveExpeditionId: saveExpeditionId,
        getExpeditionId: previousExpeditionId
    };
})();

module.exports = localStorage;