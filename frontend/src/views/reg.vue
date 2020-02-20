<template>
    <div class = "reg_div">
        <div>
            <form>
                <legend>Регистрация</legend>
                <hr>
                <label for="login">Логин:</label>
                <input type = "text" id = "login"><br>
                <label for="password">Пароль:</label>
                <input type = "password" id = "password"><br>
                <label for="repeatPassword">Повторите пароль:</label>
                <input type = "password" id = "repeatPassword">
            </form>
        </div>
    </div>
</template>

<style scoped>
    form{
        width: 500px;
    }
    #password{
        margin:0px 0 35px 0px;
    }
</style>