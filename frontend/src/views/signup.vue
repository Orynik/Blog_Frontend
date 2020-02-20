<template>
    <div class = "reg_div">
        <div>
            <form>
                <legend>Вход</legend>
                <hr>
                <label for="login">Логин:</label>
                <input type = "text" id = "login"><br>
                <label for="password">Пароль:</label>
                <input type = "password" id = "password">
            </form>
        </div>
    </div>
</template>

<style>
    #login{
        margin:30px 0 35px 12px;
    }
    label{
        margin-right: 30px;
    }
    legend{
        padding: 10px 0 5px 0;

        font-size: 20px;
        color: white;
    }
    .reg_div{
        padding-top: 60px;
        height: 100vh;
        background: url(../assets/bg.gif);
        background-size: cover;
    }
    form{
        color: white;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 20px;
        background-color: RGBA(0,0,0,0.8);
        width: 400px;
        height: 300px;
    }
</style>