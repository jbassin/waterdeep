<template>
  <keep-alive>
    <div class="container animated fadeIn">
      <div id="relationship-graph-header"
           class="notification is-primary">
        <p class="title is-4">
          Relationships
        </p>
        <cytoscape :config="config"
                   :preConfig="addGraphLayout"
                   style="height: 650px"></cytoscape>
      </div>
    </div>
  </keep-alive>
</template>

<script>
/* eslint-disable no-unused-vars,no-var,no-underscore-dangle */
import coseBilkent from 'cytoscape-cose-bilkent';

export default {
  name: 'ccRelationships',
  data() {
    return {
      config: {
        elements: [],
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#88D1CB',
              'text-valign': 'center',
              color: '#88D1CB',
              'text-outline-width': 1,
              'text-outline-color': '#000',
              'text-wrap': 'wrap',
              'text-max-width': 175,
              label: 'data(id)',
            },
          }, {
            selector: ':parent',
            style: {
              'text-valign': 'top',
              'background-opacity': 0.333,
            },
          }, {
            selector: 'edge',
            style: {
              width: 3,
              'line-color': '#88D1CB',
            },
          },
        ],
        layout: {
          name: 'circle',
          fit: true,
          padding: 30,
          avoidOverlap: true,
          nodeDimensionsIncludeLabels: true,
          // rows: 1,
        },
      },
    };
  },
  methods: {
    addGraphLayout(cytoscape) {
      cytoscape.use(coseBilkent);
    },
    loadRelationshipsFromDisk() {
      const cynodes = [];
      const cylinks = [];
      const cygroups = [];
      this.$_.each(require('../../data/relationships.json'), (person) => {
        cygroups.push({
          data: {
            id: person.faction,
          },
        });
        cynodes.push({
          data: {
            id: person.name,
            parent: person.faction,
          },
        });
        this.$_.each(person.relationships, (relation) => {
          cylinks.push({
            data: {
              id: `${person.name}:${relation}`,
              source: person.name,
              target: relation,
            },
          });
        });
      });
      this.$cytoscape.instance.then((graph) => {
        graph.remove(graph.elements());
        graph.reset();
        graph.add(cygroups);
        graph.add(cynodes);
        graph.add(cylinks);
        graph.layout({
          name: 'cose-bilkent',
          refresh: 20,
          numIter: 1000,
          randomize: false,
          animate: false,
          fit: true,
          padding: 5,
          avoidOverlap: true,
          nodeDimensionsIncludeLabels: true,
          gravity: 1.8,
          idealEdgeLength: 25,
        }).run();
        const that = this;
        graph.on('tap', (evt) => {
          if (evt.target !== graph) {
            const name = evt.target.id();
            graph.remove(graph.elements());
            graph.reset();

            const nodes = [];
            const edges = [];
            let mainNode = null;
            this.$_.each(require('../../data/relationships.json'), (person) => {
              if (person.name === name) {
                mainNode = person;
              }
            });
            nodes.push({
              data: {
                id: mainNode.name,
              },
            });
            this.$_.each(mainNode.relationships, (relation) => {
              nodes.push({
                data: {
                  id: relation,
                },
              });
              edges.push({
                data: {
                  id: `${mainNode.name}:${relation}`,
                  source: mainNode.name,
                  target: relation,
                },
              });
            });

            graph.add(nodes);
            graph.add(edges);
            graph.elements().layout({
              name: 'cose-bilkent',
              fit: true,
              padding: 5,
              avoidOverlap: true,
              nodeDimensionsIncludeLabels: true,
            }).run();
          } else {
            graph.remove(graph.elements());
            graph.reset();
            graph.off('tap');
            that.loadRelationshipsFromDisk();
          }
        });
      });
    },
  },
  mounted() {
    this.loadRelationshipsFromDisk();
  },
};
</script>

<style scoped>
  .notification {
    height: 750px;
  }
</style>
