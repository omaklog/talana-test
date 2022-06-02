<template>
  <v-card class="product" hover outlined>
    <v-card-text>

      <div class="product__image">
        <v-img
          contain
          height="200"
          :src="product.photo"/>
        <div :class="getStock(product.stock).class">
          <label>{{ getStock(product.stock).label }}</label>
        </div>
      </div>

      <p class="product__name mt-6 mb-0 title primary--text">{{product.name}}</p>

      <p class="grey--text title">{{product.price | currency }} </p>

      <div class="product__add">
        <PlusMinusField v-model="cuantity"></PlusMinusField>
        <v-btn color="primary"  >
          <v-icon>fa-cart-plus</v-icon>
        </v-btn>
      </div>

    </v-card-text>
  </v-card>
</template>

<script>
import PlusMinusField from "./PlusMinusField";

export default {
  name: "Product",

  components:{
    PlusMinusField
  },

  props:['product'],

  data: ()=> {
    return {
      cuantity: 1,
    }
  },

  methods:{

    getStock(stock){
      return stock > 0 ? {label: 'Disponible', class:'product__stock'} : {label: 'Sin Stock', class:'product__stock--off'}
0   },

  }

}
</script>

<style lang="scss" scoped>

  @import '~/assets/variables.scss';

  .product{
    max-width: 300px;
    margin: 10px;

    &__image{
      position: relative;
    }

    &__name{
      height: 100px;
      overflow-y: hidden;
      word-break: break-word;
      font-size: 14px;
    }

    &__add{
      display: flex;
      flex-wrap: nowrap;
      padding: 8px;
      width: 100%;
      justify-content: space-between;
    }

    &__stock{
      position: absolute;
      bottom: 0;
      color: $tl-white;
      background-color: $tl-tertiary;
      padding: 8px;
      border-radius: 8px;
    }

    &__stock--off{
      position: absolute;
      bottom: 0;
      color: $tl-white;
      background-color: $tl-grey-text;
      padding: 8px;
      border-radius: 8px;
    }
  }
</style>
