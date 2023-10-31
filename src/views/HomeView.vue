<template>
  <div class="home">
    <Loading v-if="booksCount == 0"/>
    <div class="container" v-if="booksCount > 0">
      <h1>Books </h1>
      <div class="contain-book-data" v-for='book in books' :key=book.id>
        <div class="book-data">
          <img :src="book.image" :alt="book.name" class="book-image">
          <div class="book-details">
            <h3>Name: {{ book.name }}</h3>
            <h3>Description: </h3> <p>{{ book.description }}</p>
            <h3>Category: {{ book.category.name }}</h3>
            <h3>Author: {{ book.author?.name }}</h3> 
            <button class="edit-button">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import APIService from '../services/APIs';
import Loading from '@/components/Loading.vue';

const API = new APIService();

export default {
  name: 'HomeView',
  components: {
    Loading
  },
  data() {
    return {
      books: []
    }
  },
  async mounted() {
    this.books = await API.getBooks(this.$store.state.userDetails);
  },
  computed: {
    booksCount() {
      return this.books.length;
    }
  }
}
</script>

<style>
.container {
  margin: 0px 100px;
}

.contain-book-data {
  background-color: rgb(245, 245, 245);
  padding: 15px;
  margin: 10px 0px;
}

.contain-book-data .book-data {
  display: flex;
  text-align: start;
}

.contain-book-data .book-data .book-image {
  width: 10%;
}

.contain-book-data .book-data .book-details {
  margin: 0px 50px;
}

.edit-button {
  width: 80px;
  height: 40px;
  background-color: rgb(104, 195, 231);
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  border: 1px solid rgb(98, 184, 218);
}

.edit-button:hover {
  background-color: rgb(92, 170, 201);
  border: 1px solid rgb(88, 163, 192);
}
</style>
