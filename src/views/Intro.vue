<template>
  <div>
    <v-card class="py-9 blue text-center">
      <v-card-title class="white--text justify-center">
        {{ $t('intro.title') }}
      </v-card-title>
      <v-card-subtitle class="white--text">
        {{ $t('intro.subtitle') }}
      </v-card-subtitle>
      <v-img class="mx-auto white rounded-circle" src="@/assets/logo.png" width="100px"/>
      <v-btn :disabled="!ready" class="blue darken-3 white--text my-9" rounded x-large @click="communicate">
        {{ $t('intro.communicate') }}
      </v-btn>
    </v-card>
    <v-card class="py-3 cyan rounded text-center">
      <v-card-subtitle class="white--text">
        &copy; 2021 <a class="white--text text-decoration-none" href="https://starinc.xyz">Star Inc.</a> and its
        contributors.
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data:()=>({
    ready: null
  }),
  methods: {
    checkReady() {
      if (this.$liff) {
        this.ready = true
        return
      }
      setTimeout(this.checkReady, 500)
    },
    communicate() {
      if (this.$liff.isLoggedIn()) {
        this.$emit('active', 1)
      } else {
        this.$liff.login(location.href)
      }
    }
  },
  created() {
    this.checkReady()
  }
}
</script>
