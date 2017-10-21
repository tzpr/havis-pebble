
var Settings = require('../settings');

var SERVER_SYNC_TIME_STAMP = 'last_server_sync';
var OBSERVATIONS = 'observations_list';

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

    function setLastServerSync(){
        var timestamp = +new Date() 
        Settings.data(SERVER_SYNC_TIME_STAMP, timestamp);
    }

    function lastServerSync(){
        return Settings.data(SERVER_SYNC_TIME_STAMP);
    }

    function saveObservation(observation){
        console.log('** localStorage saveObservation: ' + JSON.stringify(observation));
        var observationList = [];
        if (Settings.data(OBSERVATIONS)) {
            observationList = Settings.data(OBSERVATIONS);
            observationList.push(observation);
            Settings.data(OBSERVATIONS, observationList);
        } else {
            observationList.push(observation);
            Settings.data(OBSERVATIONS, observationList);
        }
    }

    function getObservations(){
        if (Settings.data(OBSERVATIONS)) {
            return Settings.data(OBSERVATIONS);
        } else {
            return [];
        }
    }


    // public api
    return {
        setLastServerSync: setLastServerSync,
        lastServerSync: lastServerSync,
        saveObservation: saveObservation,
        getObservations: getObservations,
        setItem: setItem,
        getItem: getItem,
        getItems: getItems,
        clear: clear,
        saveExpeditionId: saveExpeditionId,
        getExpeditionId: previousExpeditionId
    };
})();

module.exports = localStorage;