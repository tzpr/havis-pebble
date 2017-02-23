var UI = require('ui');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');
var localStorage = require('local-storage');
var locationService = require('location-service');
var server = require('server-communication');


function showInputWindow(shortName, longName) {

    var locationString = '[no location]',
        locationObject = undefined,
        COUNT_INPUT = 1,
        STATE_INPUT = 2,
        EXPEDITION_INPUT = 3,
        selectedInput = COUNT_INPUT,
        STATES = ['p', 'Ä', 'ä', 'Än', 'm'],
        EXPEDITION_MODE = ['Y', 'R', 'Rn'], // Y = yksittäinen havainto, R = retki, Rn = uusi retki
        count = '0',
        multiplier = 1,
        selectedState = 0,
        selectedExpeditionMode = initializeExpeditionMode(),
        inputWindow,
        location,
        time,
        speciesInput,
        countInput,
        stateInput,
        expeditionInput,
        circle;


    inputWindow = new UI.Window({
        fullscreen: true,
        backgroundColor: 'white'
    });

    location = new UI.Text({
        position: new Vector2(0, 120),
        size: new Vector2(144, 30),
        font: 'mono-font-14',
        text: locationString,
        textAlign: 'center',
        color: 'black'
    });

    time = new UI.TimeText({
        position: new Vector2(0, 140),
        size: new Vector2(144, 30),
        font: 'gothic-18-bold',
        text: '%d.%m.%Y %H:%M', //16.1.2016 23:43
        textAlign: 'center',
        color: 'black'
    });

    speciesInput = new UI.Text({
        position: new Vector2(0, 5),
        size: new Vector2(144, 30),
        font: 'gothic-28-bold',
        text: longName,
        textAlign: 'center',
        color: 'black'
    });

    countInput = new UI.Text({
        position: new Vector2(15, 65),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'lkm: ' + count,
        textAlign: 'left',
        color: 'black'
    });

    stateInput = new UI.Text({
        position: new Vector2(15, 90),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'tila: ' + STATES[selectedState],
        textAlign: 'left',
        color: 'black'
    });

    expeditionInput = new UI.Text({
        position: new Vector2(100, 75),
        size: new Vector2(144, 30),
        font: 'gothic-28-bold',
        text: '' + EXPEDITION_MODE[selectedExpeditionMode],
        textAlign: 'left',
        color: 'black'
    });

    circle = new UI.Circle({
        position: new Vector2(106, 93),
        radius: 20,
        backgroundColor: 'white',
        borderColor: 'black'
    });


    function shortVibeNotification() {
        Vibe.vibrate('short');
    }

    function longVibeNotification() {
        Vibe.vibrate('long');
    }

    function initializeExpeditionMode() {
        var id = localStorage.getExpeditionId();
        console.log(' getExpeditionMode id: ' + id);
        if (id) {
            return 1;
        } else {
            return 0;
        }
    }

    function advanceCountMultiplier(){
        multiplier = multiplier + 1;
    }

    function resetCountMultiplier(){
        multiplier = 1;
    }

    function updateLocationToInputWindow(locationObj) {
        console.log("location callback: " + locationObj);

        locationObject = locationObj;

        inputWindow.remove(location);
        location = new UI.Text({
            position: new Vector2(0, 120),
            size: new Vector2(144, 30),
            font: 'mono-font-14',
            text: locationObj.locString,
            textAlign: 'center',
            color: 'black'
        });
        inputWindow.add(location);
    }

    function selectState(direction) {
        if (direction === 'up') {
            if (selectedState < (STATES.length - 1)) {
                selectedState += 1;
            } else {
                selectedState = 0;
            }
        } else { // we are going down
            if (selectedState > 0) {
                selectedState -= 1;
            } else {
                selectedState = (STATES.length - 1);
            }
        }
        console.log(' state: ' + STATES[selectedState]);
    }

    // TODO: maybe a spot for a higher order function!
    function selectExpeditionMode(direction) {
        if (direction === 'up') {
            if (selectedExpeditionMode < (EXPEDITION_MODE.length - 1)) {
                selectedExpeditionMode += 1;
            } else {
                selectedExpeditionMode = 0;
            }
        } else { // we are going down
            if (selectedExpeditionMode > 0) {
                selectedExpeditionMode -= 1;
            } else {
                selectedExpeditionMode = (EXPEDITION_MODE.length - 1);
            }
        }
        console.log(' expedition mode: ' + EXPEDITION_MODE[selectedExpeditionMode]);
    }

    inputWindow.on('click', 'up', function (e) {
        switch (selectedInput) {
            case COUNT_INPUT:
                resetCountMultiplier();
                count = parseInt(count, 10) + 1;
                inputWindow.remove(countInput);
                countInput = new UI.Text({
                    position: new Vector2(15, 65),
                    size: new Vector2(144, 30),
                    font: 'gothic-24-bold',
                    text: 'lkm: ' + count,
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(countInput);
                break;
            case STATE_INPUT:
                console.log("handle state");
                selectState('up');
                inputWindow.remove(stateInput);
                stateInput = new UI.Text({
                    position: new Vector2(15, 90),
                    size: new Vector2(144, 30),
                    font: 'gothic-24-bold',
                    text: 'tila: ' + STATES[selectedState],
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(stateInput);
                break;
            case EXPEDITION_INPUT:
                console.log("handle expedition mode");
                selectExpeditionMode('up');
                inputWindow.remove(expeditionInput);
                expeditionInput = new UI.Text({
                    position: new Vector2(100, 75),
                    size: new Vector2(144, 30),
                    font: 'gothic-28-bold',
                    text: '' + EXPEDITION_MODE[selectedExpeditionMode],
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(expeditionInput);
                break;
            default:
                console.log('ERROR: could not resolve input');
        }
    });

    inputWindow.on('click', 'down', function (e) {
        switch (selectedInput) {
            case COUNT_INPUT:
                resetCountMultiplier();
                if (parseInt(count, 10) > 0) {
                    count = parseInt(count, 10) - 1;
                    inputWindow.remove(countInput);
                    countInput = new UI.Text({
                        position: new Vector2(15, 65),
                        size: new Vector2(144, 30),
                        font: 'gothic-24-bold',
                        text: 'lkm: ' + count,
                        textAlign: 'left',
                        color: 'black'
                    });
                    inputWindow.add(countInput);
                }
                break;
            case STATE_INPUT:
                console.log("handle state");
                selectState('down');
                inputWindow.remove(stateInput);
                stateInput = new UI.Text({
                    position: new Vector2(15, 90),
                    size: new Vector2(144, 30),
                    font: 'gothic-24-bold',
                    text: 'tila: ' + STATES[selectedState],
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(stateInput);
                break;
            case EXPEDITION_INPUT:
                console.log("handle expedition mode");
                selectExpeditionMode('down');
                inputWindow.remove(expeditionInput);
                expeditionInput = new UI.Text({
                    position: new Vector2(100, 75),
                    size: new Vector2(144, 30),
                    font: 'gothic-28-bold',
                    text: '' + EXPEDITION_MODE[selectedExpeditionMode],
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(expeditionInput);
                break;
            default:
                console.log('ERROR: could not resolve input');
        }
    });

    inputWindow.on('click', 'select', function () {
        console.log('select short click.');
        if (selectedInput === COUNT_INPUT) {
            selectedInput = STATE_INPUT;
        } else if (selectedInput === STATE_INPUT) {
            selectedInput = EXPEDITION_INPUT;
        } else {
            selectedInput = COUNT_INPUT;
        }
    });


    // jos mode on R (1) niin otetaan tallessa oleva expeditionId jos sellainen on, muuten uusi
    // jos mode on R (1) niin tallennetaan expedition mode
    function resolveExpeditionIdAndStore(newTimeInMillis) {
        var expeditionId;
        console.log('resolveExpeditionIdAndStore: ' + selectedExpeditionMode);

        if (selectedExpeditionMode === 0) {
            console.log('localStorage.saveExpeditionId');
            // reset localStorage value
            expeditionId = null;
            localStorage.saveExpeditionId(expeditionId);
            return 'expedition_' + newTimeInMillis;
        } else if (selectedExpeditionMode === 2) {
            // uusi retki uusi expeditionId
            expeditionId = 'expedition_' + newTimeInMillis;
            localStorage.saveExpeditionId(expeditionId);
            return expeditionId;
        } else {
            expeditionId = localStorage.getExpeditionId();
            if (!expeditionId) {
                expeditionId = 'expedition_' + newTimeInMillis;
                localStorage.saveExpeditionId(expeditionId);
            }
            console.log('localStorage.getExpeditionId');
            return expeditionId;
        }
    }

    inputWindow.on('longClick', 'select', function () {
        console.log('Save.');
        shortVibeNotification();

        var timestamp = +new Date(),
            expeditionId = resolveExpeditionIdAndStore(timestamp),
            observation = {
                "species": longName,
                "location": {
                    "lat": locationObject.lat,
                    "lng": locationObject.lng,
                    "accuracy": locationObject.accuracy
                },
                "count": count,
                "expeditionId": expeditionId,
                "state": STATES[selectedState],
                "time": timestamp
            };
        //TODO: figure out what to do with localstorage... all to server or not?
        //saveToLocalStorage('havis', observation);
        server.save(observation, shortVibeNotification, longVibeNotification);
    });

    inputWindow.on('longClick', 'up', function () {
        console.log('Up. Long click.');
        if (selectedInput === COUNT_INPUT) {
            count = parseInt(count, 10) + (multiplier * 10);
            advanceCountMultiplier();
            inputWindow.remove(countInput);
            countInput = new UI.Text({
                position: new Vector2(15, 65),
                size: new Vector2(144, 30),
                font: 'gothic-24-bold',
                text: 'lkm: ' + count,
                textAlign: 'left',
                color: 'black'
            });
            inputWindow.add(countInput);
        }
    });

    inputWindow.on('longClick', 'down', function () {
        console.log('Down. Long click.');
        if (selectedInput === COUNT_INPUT) {
            if (parseInt(count, 10) > (multiplier * 10)) {
                count = parseInt(count, 10) - (multiplier * 10);
                advanceCountMultiplier();
                inputWindow.remove(countInput);
                countInput = new UI.Text({
                    position: new Vector2(15, 65),
                    size: new Vector2(144, 30),
                    font: 'gothic-24-bold',
                    text: 'lkm: ' + count,
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(countInput);
            } else {
                count = 0;
                resetCountMultiplier();
                inputWindow.remove(countInput);
                countInput = new UI.Text({
                    position: new Vector2(15, 65),
                    size: new Vector2(144, 30),
                    font: 'gothic-24-bold',
                    text: 'lkm: 0',
                    textAlign: 'left',
                    color: 'black'
                });
                inputWindow.add(countInput);
            }
        }
    });

    locationService.getLocation(updateLocationToInputWindow);

    inputWindow.add(speciesInput);
    inputWindow.add(countInput);
    inputWindow.add(stateInput);
    inputWindow.add(circle);
    inputWindow.add(expeditionInput);
    inputWindow.add(location);
    inputWindow.add(time);
    inputWindow.show();
}

module.exports = showInputWindow;