<template>
 <ul>
   <li>
     {{ item.title }}
   </li>
   <ccBranch v-for="(child, index) in item.children"
             :key="index"
             :item="child"/>
 </ul>
</template>

<script>
export default {
  name: 'ccBranch',
  props: {
    item: Object,
  },
};
</script>

<style scoped>
  li {
    list-style-type: disc;
  }
</style>
