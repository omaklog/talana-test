<template>
  <v-container>
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>fa-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row justify="center" align="center">
      <Product v-for="product of productsFiltered" :product="product"/>
    </v-row>
  </v-container>

</template>

<script>

import Product from "../components/Product";
import {mapGetters} from "vuex";
export default {
  name: 'IndexPage',

  components:{
    Product
  },

  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),

  computed: {

    /**
     * Todo
     * continuar en este punto, con la composicion de los breacrumbs
     */

    breadcrumbs(){
      return [
        {
          text: 'Home',
          disabled: false,
        },
        {
          text: this.currentCategory.name
        }
        ]
    },

    ...mapGetters({
      products: 'products',
      currentCategory: 'currentCategory'
    }),

    productsFiltered(){
      if(this.currentCategory!==null){
        return this.products.filter( product =>{
          return product.category.id === this.currentCategory.id;
        })
      }else{
        return this.products;
      }

    }
  },

}
</script>
