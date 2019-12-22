<template>
  <div>

    <HomeContent />
    <HomeFooter />
    </div>
</template>

<script>
import HomeContent from "@/components/HomeContent"
import HomeFooter from "@/components/HomeFooter"


export default {
 name: 'app',
 components: {
   HomeContent,
   HomeFooter
 }
}
</script>

<style lang="css" scoped>
</style>
