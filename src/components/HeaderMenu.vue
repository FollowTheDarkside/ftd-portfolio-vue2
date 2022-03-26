<template>
    <header>
      <v-app-bar
        color="rgba(255, 255, 255, 0.5)"
        app
        light
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>FollowTheDarkside</v-toolbar-title>
        <v-tabs color="transparent" background-color="transparent" hide-slider>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :href="menuItem.url"
            :ripple="false"
          >
            <font color="dimgray">{{ menuItem.name }}</font>
          </v-tab>
          <v-tabs-slider color="transparent" />
        </v-tabs>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
          flat
        >
          <v-list-item-group>
            <v-list-item
                v-for="(menuItem) in menuItems"
                :key="menuItem.name"
                :href="menuItem.url"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>

<style lang="scss" scoped>
/* Prevent the title from being hidden */
.v-toolbar__title {
    overflow: visible !important;
    margin-right: 50px !important;
}
// Hide hamburger menu on PC
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
// Display navigation menu for PC
.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
/*
- NOTE - 
Make the background color of the tab transparent because I cannot control the color of the TOP tab. 
It may be because it is not controlled by vue router...
That's why I make tab-related colors transparent and disable ripple.
I'm tired.
*/
.v-tab::before {
  color:transparent;
}
</style>

<script>
import constants from '../common/constants'

export default {
    name: 'HeaderMenu',
    data () {
        return {
            drawer: false,
            menuItems: constants.menuItems,
            //model: 'http://localhost:8080/info.html' // タブの初期値を設定
        }
    },
}
</script>
 
