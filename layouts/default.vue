<template>
  <v-app class="layout">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      permanent
      app
    >
      <v-list>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          @click="setCategory(menu)"
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.name"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-spacer/>
      <div class="layout__search">
        <v-text-field
          hide-details
          append-icon="fa-magnifying-glass"
          rounded
          solo
        ></v-text-field>
      </div>
      <div class="mx-12">
        <v-badge
          color="blue"
          content="6"
        >
          <v-icon>fa-solid fa-bag-shopping</v-icon>
        </v-badge>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'DefaultLayout',

  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.jsaa'
    }
  },


  computed: {
    ...mapGetters({
      menus: 'menus'
    })
  },


  created() {
    this.getMenu();
    this.getProducts();
  },

  methods: {

    ...mapMutations({
      setCurrentCategory: 'setCurrentCategory'
    }),

    ...mapActions({
      getMenu: 'getMenu',
      getProducts: 'getProducts',
    }),

    setCategory(menu){
      this.setCurrentCategory(menu)
    }


  }

}
</script>
<style lang="scss">
.layout {

  &__search {
    width: 320px;
  }

}
</style>
