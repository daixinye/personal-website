<style scoped>
  .hello {
    color: red;
  }
</style>

<template>
  <p class="hello">{{content}}</p>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      content: 'hello'
    }
  }
}
</script>
