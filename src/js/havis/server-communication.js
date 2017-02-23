var ajax = require('ajax');

var server = (function server(){

    function saveToServer(entryObject, successHandler, errorHandler) {
        // these could be editable
        var magicToken = 'TOKEN';
        var URL = 'SERVER-ADDRESS';

        // augment the entry with magicToken
        entryObject.identificazionCode = magicToken;

        ajax({
                method: 'post',
                url: URL,
                type: 'json',
                data: entryObject
            },
            function (data, status, request) {
                //successHandler();
                //console.log('POST success');
            },
            function (message, status, request) {
                if (status === 'OK') {
                    //console.log('POST success: message:' + message + " status: " + status);
                    successHandler();
                }else{
                    //console.log('POST failure: message:' + message + " status: " + status);
                    errorHandler();
                }
            }
        );
    }

    // we could also read something...
    function read(){

    }

    // public api
    return {
        save: saveToServer
    };

})();

module.exports = server;