<template>
    <div class="container">
        <div class="form">
            <div class="login__block">
                <div>
                    <label for="user">User</label>
                    <input
                        class="login__input"
                        placeholder="Enter your login"
                        type="text"
                    />
                </div>
                <div>
                    <label for="pwd">Password</label>
                    <input
                        class="pwd__input"
                        placeholder="Enter your password"
                        type="password"
                    />
                </div>
                <div style="display: flex; justify-content: center">
                    <button class="submit__btn" type="button">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="css">
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    border: 1px solid black;
    max-width: 400px;
    max-height: 450px;
    height: 50%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-color: #1d5cd1;
}

.login__block {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 70%;
}

.login__block > div {
    display: grid;
}

.pwd__input,
.login__input {
    padding: 5px 3px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: rgb(214, 214, 214);
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    margin-top: 5px;
}

.submit__btn {
    border: none;
    background: rgb(214, 214, 214);
    font-family: 'Lato', sans-serif;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
}
</style>
