<template>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Авторизация</h1>
        <form class = "mx-auto form-auth">
            <div class = "d-flex flex-column mx-auto">
                <label for="login">Логин:</label>
                <input type="text" id = "login" class = "form-auth-input">
                <label for="password">Пароль:</label>
                <input type="text" id = "password" class = "form-auth-input">
                <b-button class = "form-auth-submit">Отправить</b-button>
            </div>
        </form>
    </b-container>
</template>