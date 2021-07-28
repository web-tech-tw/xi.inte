<template>
  <v-container>
    <v-card>
      <v-card-title class="pb-0">
        <v-avatar>
          <v-img :src="profile.pictureUrl"/>
        </v-avatar>
      </v-card-title>
      <div>
        <v-card-title>
          {{ profile.displayName }}
        </v-card-title>
        <v-card-subtitle>
          {{ profile.statusMessage }}
        </v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "User",
  data: ()=>({
    profile: {}
  }),
  async created() {
    this.profile = await this.$liff.getProfile();
  }
}
</script>
