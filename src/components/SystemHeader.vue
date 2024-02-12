<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black text-white" style="height: 70px">
      <div class="q-pt-sm">
        <q-toolbar v-if="!$q.screen.gt.xs">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-space></q-space>
          <div><q-btn>Entrar</q-btn></div>
        </q-toolbar>
        <q-toolbar v-else>
          <q-img
            :src="logoSrc"
            alt="Logo"
            spinner-color="primary"
            style="max-width: 50px; max-height: 50px"
          />
          <q-toolbar-title
            class="flex q-gutter-md"
            style="place-content: center; font-size: medium"
            ><div
              v-for="pages in linksList"
              :key="pages.title"
              :to="pages.link"
              class="cursor-pointer header-buttons"
              @click="goTo(pages.link)"
            >
              {{ pages.title }}
            </div>
          </q-toolbar-title>
          <div><q-btn flat>Entrar</q-btn></div>
        </q-toolbar>
      </div>
    </q-header>
    <q-header reveal style="height: 10px" class="header-bg"></q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-black text-white"
      show-if-above
      bordered
      v-if="!$q.screen.gt.xs"
    >
      <q-list>
        <div class="q-pa-md text-center">
          <q-img
            :src="logoSrc"
            alt="Logo"
            spinner-color="primary"
            style="max-width: 80px; max-height: 96px"
          />
        </div>
        <BarsMobile v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, defineProps } from "vue";
import BarsMobile from "components/BarsMobile.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();
const linksList = ref([
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Sobre",
    link: "/about",
  },
  {
    title: "Jogadores",
    link: "/players",
  },
  {
    title: "Galeria",
    link: "/gallery",
  },
  {
    title: "Mídia Kit",
    link: "/kit",
  },
  {
    title: "Contato",
    link: "/contact",
  },
]);

const props = defineProps({
  logoSrc: String,
});

const leftDrawerOpen = ref(false);

const goTo = (page) => {
  router.push(page);
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
