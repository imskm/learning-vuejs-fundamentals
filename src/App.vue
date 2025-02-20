<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import AppButton from "@/AppButton.vue";
// import DataBinding from "@/DataBinding.vue";
import ProductList from "@/ProductList.vue";
import ProductList2 from "@/ProductList2.vue";
import Box from "@/Box.vue";
import ProductPage from "@/ProductPage.vue";
import TodoPage from "@/TodoPage.vue";

const myColor = "red";

const products = ref([
    { id: 1, name: "T-Shirt", visible: true },
    { id: 2, name: "Jeans", visible: true },
    { id: 3, name: "Redmi Note Pro 10", visible: true },
    { id: 4, name: "Apple", visible: true },
]);

const products2 = ref([
    { id: 1, name: "Computer", visible: true },
    { id: 2, name: "TV", visible: true },
    { id: 3, name: "Phone", visible: true },
    { id: 4, name: "Charger", visible: true },
]);


</script>

<template>
<!--   <AppButton>
    Make a counter
  </AppButton>
 -->
  <!-- <DataBinding></DataBinding> -->
  <!-- <ProductList /> -->

  <!-- <Box :color="myColor" /> -->

  <!-- <ProductList2 :products="products" /> -->
  <!--             ^        ^          -->
  <!--         prop name    prop value (variable) -->

<!--   <br>
  <br>
  <br>

  <ProductList2 :products="products2" />


  <ProductPage />

  <TodoPage /> -->

  <RouterView></RouterView>

</template>