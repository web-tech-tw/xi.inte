<template>
  <v-card>
    {{ profile.displayName }}
  </v-card>
</template>

<script>
export default {
  name: "User",
  data: ()=>({
    profile: {}
  })
}
</script>
