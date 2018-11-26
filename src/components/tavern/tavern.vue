<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        {{ tavern.name }}: Status Report
      </p>
      <div class="columns">
        <div class="column is-one-third column-left">
          <p class="subtitle is-5">
            Currently Hired Employees:
          </p>
          <p v-for="(employee, index) in tavern.employees"
             :key="index">
            <strong>{{ employee.job }}</strong>: {{ employee.name }}
          </p>
        </div>
        <div class="column is-one-third">
          <p class="subtitle is-5">
            Guaranteed Revenue and Costs:
          </p>
          <table class="table is-fullwidth">
            <tbody class="has-background-primary has-text-white">
              <tr v-for="(moneyflow, index) in tavern.moneyflow"
                  :key="index">
                <td>
                  {{ moneyflow.text }}
                </td>
                <td class="has-text-right">
                  <span :class="[moneyflow.value >= 0 ? 'has-text-success' : 'has-text-danger']">
                    {{ moneyflow.value }}
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
import TavernApi from '../../services/tavern';
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
    async loadTavernFromDisk() {
      const employees = await TavernApi.fetchEmployees();
      const moneyflow = await TavernApi.fetchMoneyflows();
      const prospects = await TavernApi.fetchProspects();
      this.tavern = {
        name: 'The Floating Cup',
        employees: employees.data.employees,
        moneyflow: moneyflow.data.moneyflow,
        prospects: prospects.data.prospects,
      };
    },
  },
  computed: {
    totalCost() {
      let total = 0;
      this.$_.each(this.tavern.moneyflow, (moneyflow) => {
        total += moneyflow.value;
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
  .column {
    border-right: 0.5px solid white;
    border-left: 0.5px solid white;
  }
</style>
