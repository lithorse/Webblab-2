const url = 'https://www.forverkliga.se/JavaScript/api/crud.php?';
const key = 'hC3jF'
let success = false;

function formatBooks(arr) {
    let str = "";
    for (i = 0; i < arr.length; i++) {
        str += "<div class='table-cell'>" + arr[i].id + ". " + arr[i].title + " by " + arr[i].author + "</div>";
    }
    return str;
}

function fetchData() {
    var request = new Request(url + 'op=select&key=' + key);
    fetch(request).then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                if (data.status === "success") {
                    document.getElementById("demo").innerHTML =
                        formatBooks(data.data);
                }
                else {
                    document.getElementById("demo").innerHTML =
                        data.status + ' ' + data.message;
                }
            });
        }
    )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function addData() {
    var request = new Request(url + 'op=insert&key=' + key + '&title=' + prompt('Enter title') + '&author=' + prompt('Enter author'), {
        method: 'post',
    });
    fetch(request).then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                if (data.status === "success") {
                    document.getElementById("demo").innerHTML =
                        data.status;
                }
                else {
                    document.getElementById("demo").innerHTML =
                        data.status + ' ' + data.message;
                }
            });
        }
    )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function modifyData() {
    var request = new Request(url + 'op=update&key=' + key + '&id=' + prompt('Enter id') + '&title=' + prompt('Enter title') + '&author=' + prompt('Enter author'), {
        method: 'post',
    });
    fetch(request).then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                if (data.status === "success") {
                    document.getElementById("demo").innerHTML =
                        data.status;
                }
                else {
                    document.getElementById("demo").innerHTML =
                        data.status + ' ' + data.message;
                }
            });
        }
    )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function deleteData() {
    var request = new Request(url + 'op=delete&key=' + key + '&id=' + prompt('Enter id'), {
        method: 'post',
    });
    fetch(request).then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                if (data.status === "success") {
                    document.getElementById("demo").innerHTML =
                        data.status;
                }
                else {
                    document.getElementById("demo").innerHTML =
                        data.status + ' ' + data.message;
                }
            });
        }
    )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}