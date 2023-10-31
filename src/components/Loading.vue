<template>
    <div class="loading-container">
        <h1 v-for="dot in count" :key="dot"><span></span></h1>
    </div>
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            count: 1,
            dotCounts: [],
        }
    },
    mounted(){
        setInterval(() => {
            if(this.count < 3){
                this.count++;
            } else {
                this.count = 1;
            }
        }, 1000);
    }
}
</script>

<style>
.loading-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10%;
}
.loading-container span {
    display: block;
    width: 10px;
    height: 10px;
    background-color: rgb(98, 184, 218);
    margin: 0px 10px;
    border-radius: 50px;
}
</style>