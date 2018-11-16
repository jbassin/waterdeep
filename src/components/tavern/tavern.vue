<template>
  <div class="container animated fadeInLeft">
    <div class="notification is-primary">
      <p class="title is-4">
        {{ tavern.name }}: Status Report
      </p>
      <div class="columns">
        <div class="column is-one-third column-left">
          <p class="subtitle is-5">
            Currently Hired Employees:
          </p>
          <p v-for="(name, job) in tavern.employees"
             :key="name">
            <strong>{{ job }}</strong>: {{ name }}
          </p>
        </div>
        <div class="column is-one-third">
          <p class="subtitle is-5">
            Guaranteed Revenue and Costs:
          </p>
          <table class="table is-fullwidth">
            <tbody class="has-background-primary has-text-white">
              <tr v-for="(fee, reason) in tavern.moneyflow"
                  :key="reason">
                <td>
                  {{ reason }}
                </td>
                <td class="has-text-right">
                  <span :class="[fee >= 0 ? 'has-text-success' : 'has-text-danger']">
                    {{ fee }}
                  </span>
                  dr
                </td>
              </tr>
            </tbody>
            <tfoot class="has-background-primary has-text-white">
              <tr>
                <th class="has-text-white">
                  Total:
                </th>
                <th class=" has-text-white has-text-right">
                    <span :class="[totalCost >= 0 ? 'has-text-success' : 'has-text-danger']">
                      {{ totalCost }}
                    </span>
                  dr
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="column is-one-third column-right">
          <p class="subtitle is-5">
            Current Prospects:
          </p>
          <table class="table is-fullwidth">
            <tbody class="has-background-primary has-text-white">
              <ccProspect v-for="(prospect, index) in prospectList"
                          :key="index"
                          :prospect="prospect"
                          :max="max"
                          :min="min"/>
            </tbody>
          </table>
          <br>
          <div class="has-text-centered">
            Currently looking {{ status }}.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import ccProspect from './prospect.vue';

export default {
  name: 'ccTavern',
  components: {
    ccProspect,
  },
  data() {
    return {
      tavern: {},
    };
  },
  methods: {
    loadTavernFromDisk() {
      this.tavern = require('../../data/tavern.json');
    },
  },
  computed: {
    totalCost() {
      let total = 0;
      this.$_.each(this.tavern.moneyflow, (value) => {
        total += value;
      });
      return total;
    },
    max() {
      let max = 0;
      this.$_.each(this.tavern.prospects, (prospect) => {
        max = prospect.value > max ? prospect.value : max;
      });
      return max;
    },
    min() {
      let min = 0;
      this.$_.each(this.tavern.prospects, (prospect) => {
        min = prospect.value < min ? prospect.value : min;
      });
      return min;
    },
    prospectList() {
      const copy = this.$_.map(this.tavern.prospects, this.$_.clone);
      return copy.sort((a, b) => b.value - a.value);
    },
    status() {
      let total = 0;
      this.$_.each(this.prospectList, (value) => {
        total += value.value;
      });
      switch (true) {
        case (total < -25):
          return 'really bad';
        case (total < -20):
          return 'quite bad';
        case (total < -15):
          return 'bad';
        case (total < -10):
          return 'a little bad';
        case (total < -5):
          return 'not good';
        case (total < 0):
          return 'kinda okay';
        case (total < 5):
          return 'okay';
        case (total < 10):
          return 'not bad';
        case (total < 15):
          return 'good';
        case (total < 20):
          return 'quite good';
        case (total < 25):
          return 'very good';
        default:
          return 'excellent';
      }
    },
  },
  created() {
    this.loadTavernFromDisk();
  },
};
</script>

<style scoped>
  .column-left {
    border-right: 1px solid white;
  }
  .column-right {
    border-left: 1px solid white;
  }
</style>
