let user = prompt("Who's there ?",'');

if (user === "Admin") {
    let password = prompt("password ?",'');
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === '' || password === null) {
        alert ("canceled");
     } else {
        alert("Wrong password");
    }
} else if (user === '' || user === null ) {
    alert("canceled");
} else {
    alert("I don't know you");
}