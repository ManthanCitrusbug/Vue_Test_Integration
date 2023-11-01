<template>
    <div class="header-container">
        <div class="header-options">
            <router-link to="/home">Dashboard</router-link>
            <router-link to="/add-new-book">Add Book</router-link>
            <router-link to="/profile">Profile</router-link>
        </div>
        <div class="header-options-logout">
            <router-link to="/profile">Logout</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    mounted(){
        console.warn("header is already mounted");
    },
}
</script>

<style>
.header-container {
    background-color: rgb(58, 58, 58);
    height: 70px;
}

.header-container .header-options a {
    color: aliceblue;
    display: inline-block;
    float: left;
    margin: 24px;
    text-decoration: none;
    font-size: 20px;
}

.header-container .header-options a:hover, .header-container .header-options-logout a:hover {
    color: rgb(165, 211, 252);
}

.header-container .header-options-logout a {
    color: aliceblue;
    display: inline-block;
    float: right;
    margin: 24px;
    text-decoration: none;
    font-size: 20px;
}

</style>