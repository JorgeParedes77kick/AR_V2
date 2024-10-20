<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  subMenu: Array,
});

const activeGroup = ref(null);

</script>

<template>
  <template v-for="(subM, index) in subMenu" :key="subM.id+ 'group'">
    <template v-if="subM.submenu.length === 0" >
      <v-list-item :title="subM.nombre" :href="subM.url_ref" :prepend-icon="subM.icon" ></v-list-item>
    </template>
    <template v-else >
      <v-list-group v-model="activeGroup" :value="subM.id+ 'subItem'" class="my-v-list-group" >
        <template v-slot:activator="{ props }" >
          <v-list-item v-bind="props" :title="subM.nombre" href="#" :prepend-icon="subM.icon" ></v-list-item>
        </template>
        <LeftMenuItemSub :subMenu="subM.submenu" ></LeftMenuItemSub>
      </v-list-group>
    </template>
  </template>
</template>

<style scoped>

</style>
