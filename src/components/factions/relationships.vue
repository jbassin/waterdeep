<template>
  <keep-alive>
    <div class="container animated fadeIn">
      <div id="relationship-graph-header"
           class="notification is-primary">
        <p class="title is-4">
          Relationships
        </p>
        <cytoscape :config="config"
                   style="height: 650px"></cytoscape>
      </div>
    </div>
  </keep-alive>
</template>

<script>
/* eslint-disable no-unused-vars,no-var */

export default {
  name: 'ccRelationships',
  data() {
    return {
      config: {
        elements: [
          { // node a
            data: { id: 'a' },
          }, { // node b
            data: { id: 'b' },
          }, { // edge ab
            data: {
              id: 'ab',
              source: 'a',
              target: 'b',
            },
          },
        ],
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#fff',
              label: 'data(id)',
            },
          }, {
            selector: 'edge',
            style: {
              width: 3,
              'line-color': '#fff',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
            },
          },
        ],
        layout: {
          name: 'grid',
          rows: 1,
        },
      },
    };
  },
  methods: {
    resizeCanvas() {
      // const canvas = document.getElementById('relationship-graph');
      // const parent = document.getElementById('relationship-graph-header');
      // canvas.width = parent.offsetWidth - canvas.offsetLeft * 2;
      // canvas.height = parent.offsetHeight - canvas.offsetTop - 25;
    },
  },
  mounted() {
    this.resizeCanvas();
  },
};
</script>

<style scoped>
  .notification {
    height: 750px;
  }
</style>
