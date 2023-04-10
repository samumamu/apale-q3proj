function submit()
{
    var u = document.getElementById('user').value;
    var p = document.getElementById('pass').value;

    if(u==""&&p=="")
    {
        document.getElementById('loginError').innerHTML = "Please enter your username and password.";
        console.log("Login error.");
    }
    else if(u=="")
    {
        document.getElementById('loginError').innerHTML = "Please enter your username.";
        console.log("Login error.");
    }
    else if(p=="")
    {
        document.getElementById('loginError').innerHTML = "Please enter your password.";
        console.log("Login error.");
    }
    else
    {
        document.getElementById('loginError').innerHTML = "";
        console.log("");
    }
}

function userColor()
{
    document.getElementById('user').style.backgroundColor = "rgb(73, 58, 58)";
}

function passColor()
{
    document.getElementById('pass').style.backgroundColor = "rgb(73, 58, 58)";
}