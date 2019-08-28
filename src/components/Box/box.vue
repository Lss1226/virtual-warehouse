<template>
    <div class="box">
      <div>
        <router-view/>
      </div>
      <Below></Below>
    </div>
</template>

<script>
  import Below from '../Below/Below'
	export default {
    components:{
        Below
    }
	}
</script>

<style scoped>

</style>
