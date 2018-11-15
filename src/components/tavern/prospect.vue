<template>
  <tr>
    <td :style="color">
      {{ prospect.text }}
    </td>
    <td class="has-text-right">
      <span :style="color">
        {{ prospect.value >= 0 ? '+' : '-' }}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ccProspect',
  props: {
    prospect: { required: true },
    max: { required: true },
    min: { required: true },
  },
  computed: {
    color() {
      let color = 'rgb(155, 155, 155)';
      if (this.prospect.value > 0) {
        color = `rgb(155, ${((this.prospect.value / this.max) * 155) + 155}, 155)`;
      } else if (this.prospect.value < 0) {
        color = `rgb(${((this.prospect.value / this.min) * 155) + 155}, 155, 155)`;
      }
      return {
        color,
      };
    },
  },
};
</script>

<style scoped>

</style>
