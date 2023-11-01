<template>
    <div class="container">
        <h1>Add New Book</h1>
        <div class="add-book-form">
            <form @submit.prevent="submitForm">
                <div class="input-container">
                    <label for="name">Book Name : :</label> <br>
                    <input type="text" name="name" placeholder="Book Name"> <br>
                </div>
                <div class="input-container">
                    <label for="name">Book Discription :</label> <br>
                    <input type="text" name="name" placeholder="Book Discription"> <br>
                </div>
                <div class="input-container">
                    <label for="name">Name</label> <br>
                    <input type="file" name="name"> <br>
                </div>
                <div class="input-container">
                    <label for="name">Book Category :</label> <br>
                    <input type="text" name="name" placeholder="Book Category"> <br>
                </div>
                <div class="input-container">
                    <label for="name">Book Quantity :</label> <br>
                    <input type="text" name="name" placeholder="Book Quantity"> <br>
                </div>
                <div class="input-container">
                    <label for="name">Book Author :</label> <br>
                    <input type="text" name="name" placeholder="Book Author"> <br>
                </div>
                <button>Add Book</button>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue';
import APIService from '@/services/APIs';
import { useStore } from 'vuex';

export default {
    name: "AddNewBookView",
    setup() {
        const API = new APIService();
        const store = useStore();
        let categories = ref([]);

        const userData = reactive({
            name: "",
            description: "",
            quantity: 0,
            image: "",
            category: {},
        });

        function addNewBook() {
            const response = API.addBook({...store.state.userDetails, category: userData.category[0]});
            console.warn(userData, "addNewBookaddNewBookaddNewBook");
        }

        function setCategory(event) {
            const category_id = Number(event.target.value);
            userData.category = categories.value.filter((category) => category.id === category_id);
            console.warn(userData.category[0], "userDatauserDatauserDatauserDatauserDatauserData");
        }
        
        function submitForm() {
            console.warn("submitForm");
        }

        onMounted(async () => {
            categories.value = await API.getCategories(store.state.userDetails);
            console.warn("addNewBook", categories.value);
        })

        return toRefs(userData), {
            addNewBook,
            setCategory,
            submitForm,
            categories,
        }
    },
}
</script>

<style>
.input-container {
    margin: 20px 0px;
}

.input-container input {
    width: 50%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid rgb(168, 168, 168);
    margin: 10px 0px;
}
</style>