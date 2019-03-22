<template>
  <p>Hello {{ name }}!</p>
</template>

<script>
export default {
  data: function() {
    return {
      name: this.$vnode.data.props['name']
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
