<template>
  <p>Hello {{ name }}!</p>
</template>

<script>
import {defineComponent} from 'vue'


export default defineComponent({
  data: function() {

    console.log("this", this)

    return {
      name: this._.attrs['name']
    };
  }
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
