<template>
    <div class="pagination">
        <span v-for="page in totalPages" :key="page" :class="{active: page === pageNumber}" @click="setPageNumber(page)">{{ page }}</span>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    data() {
        return {
            pageNumber: 1,
            totalPages: this.pagesLength, 
        }
    },
    props:{
        pagesLength: Number,
    },
    methods: {
        setPageNumber(pagenumber) {
            this.pageNumber !== pagenumber && this.$emit('pageNumber', pagenumber);
            this.pageNumber = pagenumber;
        }
    },
    emits: [
        'pageNumber'
    ]
}
</script>

<style>
.pagination {
    margin: 25px 0px;
}
.pagination span{
    padding: 10px;
    margin: 10px;
    background-color: #5d808e;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}

.pagination span:hover{
    background-color: #3e6271;
}

.pagination span.active{
    background-color: #25ace0;
}
</style>