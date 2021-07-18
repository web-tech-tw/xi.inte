<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
      <v-avatar class="white mr-3">
        <v-img alt="Logo" src="@/assets/logo.png" width="39" />
      </v-avatar>
        <v-app-bar-title>XI</v-app-bar-title>
      </div>
      <v-spacer />
      <v-btn href="https://github.com/orgs/star-inc/projects?query=XI" text>
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Intro/>
    </v-main>
  </v-app>
</template>

<script>
  import Intro from './components/Intro';
  
  export default {
    name: 'App',
    components: {
      Intro,
    },
    methods: {},
    async created() {
      const liff = window.liff
      await liff.init({
        liffId: "1656225814-84e21G6Q"
      })
      if (!liff.isLoggedIn()) {
        liff.login({
          redirectUri: location.href
        });
      }
      liff.getIDToken();
    }
  };
</script>
