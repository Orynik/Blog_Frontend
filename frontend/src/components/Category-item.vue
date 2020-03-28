<template>
    <div>
        <li v-for = "category in categories" :key = "category.name">
            <a href="#">{{category.name}}</a>
        </li>
    </div>
</template>
<script>
import api from "../api/index.js"

export default {
    data(){
        return{
            categories: api.getCategories(),
        }
    }
}
</script>