/* This block of code contains the AJAX calls to implement the WebSocket API
window.onload = function () {

    let wsConnection;
    let chatBox = document.getElementById('chatWindow');
    let sendButton = document.getElementById('Send');
    let connectButton = document.getElementById('Connect');
    let disconnectButton = document.getElementById('Disconnect');
    let msgToSend = document.getElementById('msgSendText');

    disconnectButton.onclick = function () {
        // this is the method to close the currently opened connection to the server
        wsConnection.close();
    };

    connectButton.onclick = function () {
        // this is the url and protocols with which the connection is established
        wsConnection = new WebSocket('ws://studygroup.70480.com', ['soap', 'xmpp']);
        console.info('Connection established');
    };

    sendButton.onclick = function () {

        // check the state of the connection
        if (wsConnection.readyState === WebSocket.OPEN) {
            // send message to the server
            wsConnection.send(msgToSend);
        }
        else {
            // show message in chat window
            NewLine();
            chatBox.value = chatBox + ' You: ' + msgToSend.value;

            // clear message text box
            msgToSend.value = '';
        }

        // event handler for when the WebSocket connection is established
        wsConnection.onopen = function () {
            chatBox.textContent = chatBox.textContent + ' System: Connection has been established';
            console.info('Connection opened');
        };

        // event handler for when the WebSocket encounters an error
        wsConnection.onerror = function () {
            // write an error message to the screen
            NewLine();
            chatBox.value = chatBox.value + ' System: Error occurred';
            console.error('Error occurred');
        };

        // event handler for when the WebSocket closes
        wsConnection.onclose = function () {
            // write that the connection has been closed
            NewLine();
            chatBox.value = chatBox.value + ' System: Connection has been closed';
            console.info('Connection closed');
        };

        // event handler for when teh WebSocket receives a message
        wsConnection.onmessage = function () {
            // write the message
            NewLine();
            chatBox.value = chatBox.value + ' Them: ' + msgToSend.data;
            console.info('Message sent');
        };

        // helper functions
        function NewLine() {
            chatBox.textContent = chatBox.textContent + '\r\n';
        }
    };

};*/

/* This block of code contains different jQuery implementations */

window.onload = function () {

    $('#searchButton').click(function () {
        let searchPath;
        $('#searchResults').empty();
        
        switch ($('#searchFruit').val()) {

            case 'long':
                searchPath = 'Fruit/Long.xml';
                break;

            case 'round':
                searchPath = 'Fruit/Round.xml';
                break;

            case 'orange':
                searchPath = 'Fruit/Orange.xml';
                break;

            default:
                InvalidSearchTerm();
                break;

        }

        // ajax GET request
        $.ajax({
            url: searchPath,
            cache: false,
            type: "GET",
            dataType: "xml",
            success: function (data) {
                $(data).find("fruit").forEach(function () {
                    $('#searchResults').append($(this).text());
                    $('#searchResults').append('<br/>');
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#searchResults').append(errorThrown);
            }
        });

        // ajax POST request
        $.ajax({
            url: searchPath,
            cache: false,
            dataType: "xml",
            type: "POST",
            success: function (data) {
                $(data).find("fruit").forEach(function () {
                    $('#searchResults').append($(this).text());
                    $('#searchResults').append('<br/>');
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#searchResults').append(errorThrown);
            }
        });

        function InvalidSearchTerm() {
            $('#searchResults').empty();
            $('#searchResults').append('Invalid Search Term. Please try again.');
        }

    });

};