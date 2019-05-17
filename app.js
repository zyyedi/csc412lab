var objPeople = [
    { // Object @ 0 index
        username: "sam",
        password: "sam"
    },
    { // Object @ 1 index
        username: "matt",
        password: "matt"
    },
    { // Object @ 2 index
        username: "chris",
        password: "chris"
    }

];
let islogin = false;


let valuedUser;

function getInfo() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('psw').value;
    for (var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if (username === objPeople[i].username && password === objPeople[i].password) {
            alert(username + " is logged in!!!");
            valuedUser = objPeople[i].username;
            islogin = true;

            // stop the function if this is found to be true
            return
        }
    }
    alert("incorrect username or password")
}

function isLogin() {
    var tickets = document.getElementById('tickets').value;
    if (islogin === true) {
        alert(valuedUser + " you get " + tickets +" tickets!");
        return;
    }
    alert("Please login first");
}