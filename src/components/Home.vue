<template>
  <div>

    <HomeContent />
    <HomeFooter />
    </div>
</template>

<script>
import HomeContent from "@/components/Home.Compon/HomeContent"
import HomeFooter from "@/components/Home.Compon/HomeFooter"


export default {
  name: 'app',
  components: {
    HomeContent,
    HomeFooter
  },
}
</script>

<style lang="css" scoped>
</style>
