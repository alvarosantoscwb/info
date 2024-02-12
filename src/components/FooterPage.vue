<template>
  <div
    class="bg-black text-white"
    :style="$q.screen.gt.xs ? 'height: 70px' : ''"
  >
    <div
      class="row q-pt-lg"
      :style="$q.screen.gt.xs ? 'padding-left: 100px' : 'padding-left: 10px'"
    >
      <p class="text-grey-5">
        © 2023 <span class="text-orange">FKA Sports</span>. All Rights Reserved.
      </p>
      <q-space></q-space>
      <q-icon
        v-for="icon in socialIcons"
        :key="icon"
        :name="icon"
        class="q-mr-sm cursor-pointer"
        :size="$q.screen.gt.xs ? '30px' : '20px'"
        color="white"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: ["lab la-facebook", "lab la-twitter", "lab la-instagram"], // Adicione os ícones das redes sociais desejadas aqui
    };
  },
};
</script>
