function emailValidate() {
    document.getElementById("errorMsg").innerHTML = " ";
    var username = document.forms["login-form"]["uname"].value;
    username = username.toLowerCase();
    var password = document.forms["login-form"]["passwd"].value;
    //Create Cookie
    var expiryDate="Fri 01 Nov 2020 12:00:00 UTC";
    document.cookie = "username="+escape(username)+"&"+"password="+encodeURI(password)+";expires="+ expiryDate +";"+"path=/Karthick/userloginpage(Ajax);"+"Secure;" 
    if (username == null || username == "" || password == null || password == "") {
        document.getElementById("errorMsg").innerHTML = "*Fill all the Fields";
    } else {
        //var result = /^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})+$/.test(username);
        if (true) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function (){
                if (xmlHttp.readyState == 4 && this.status == 404) {
                    document.getElementById("errorMsg").innerHTML = "*Your File Not Found";
                }
                 if (xmlHttp.readyState == 4 && this.status == 200) {
                    var  xmlDoc = this.responseXML;
                    //var user = xmlDoc.getElementsByTagName("username");
                    var passwd = xmlDoc.getElementsByTagName("password");
                    for (i = 0; i < passwd.length; i++) {
                        if(password == passwd[i].childNodes[0].nodeValue){
                            document.getElementById("errorMsg").innerHTML = "Your Authorized Person"
                        }
                        else{
                            document.getElementById("errorMsg").innerHTML = "*invalid UserName and Password";

                        }
                    }
                }
                
            };
            xmlHttp.open("POST","user-"+username+".xml", true);
            xmlHttp.send(username,password);
            } else {
                document.getElementById("errorMsg").innerHTML = "*Enter Valid Mail ID";
            }
    }
}
function display() {
    var cookies=document.cookie;
    alert(cookies);
    var time = setInterval(function() {
    displaytime()
    }, 1000); 
}
function displaytime() {
    var today = new Date();
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date = checktime(date);
    hour = checktime(hour);
    minutes = checktime(minutes);
    seconds = checktime(seconds);
    document.getElementById('day').innerHTML = days[day];
    document.getElementById('date').innerHTML = date + "-" + months[month] + "-" + year ;
    document.getElementById('time').innerHTML = hour + ":" + minutes + ":" + seconds;
}
function checktime(n) {
    if (n < 10) {
        n = "0" + n;
        return n;
    } else {
        return n;
    }
}