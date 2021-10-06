$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("name").val();
        var email = $("email").val();
        var password = $("password").val();
        if (name == "") {
            alert("введите ваше имя");
        }
        else if (email == "") {
            alert("Введите email");
        }
        else if (password == "") {
            alert("введите пароль");
        }
        else if (password.length < 6) {
            alert("Пароль должен быть не меньше 6 символов")
        }
        else {
            alert("Вы успешно зарегистрировались")
        }
        
    })
});