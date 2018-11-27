<template>
 <ul>
   <li>
     <a @click="go">
       {{ item.title }}
     </a>
   </li>
   <ccBranch v-for="(child, index) in item.children"
             :key="index"
             :item="child"
             :path="`${path}/${child.title.replace(/ /g, '_')}`"/>
 </ul>
</template>

<script>
export default {
  name: 'ccBranch',
  props: {
    item: Object,
    path: String,
  },
  methods: {
    go() {
      this.$router.replace({
        path: this.path,
      });
    },
  },
};
</script>

<style scoped>
  li {
    list-style-type: disc;
  }
</style>
