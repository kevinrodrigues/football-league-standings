<template>
  <div class="about">
    <h1>This is the league table</h1>

    <input type="checkbox" id="switch" />
    <label for="switch" @click="onToggleSwitcherState">Toggle</label>

    <h3>{{ getSwitchedStateHeading }}</h3>

    <table>
      <tr class="table-heading">
        <th>Player</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>PS</th>
        <th>DO</th>
        <th>Late</th>
        <th>MOM</th>
        <th>Total</th>
        <th>Ave</th>
      </tr>

      <tr v-for="item in sortedLeagueStandings"
          :key="item.id"
          class="table-stats">
          <td>
            <router-link
              :to="{ path: 'player-bio',
              name: 'player-bio',
              params: {
                player: item.player
              },
              query: { player: item.player },
              props: true }">
              {{ item.player }}
            </router-link>
          </td>
          <td>{{ item.played }}</td>
          <td>{{ item.won }}</td>
          <td>{{ item.draw }}</td>
          <td>{{ item.lost }}</td>
          <td>{{ item.ps }}</td>
          <td>{{ item.doOut }}</td>
          <td>{{ item.late }}</td>
          <td>{{ item.mom }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.ave }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    toggleSwitcherActive: true,
  }),

  computed: {
    ...mapState(['leagueTable']),

    ...mapGetters([
      'sortByAverage',
      'sortByTotal',
    ]),

    /* eslint-disable */
    sortedLeagueStandings() {
      if (this.leagueTable) {
        return this.toggleSwitcherActive
          ? this.sortByAverage
          : this.sortByTotal;
      }
    },

    getSwitchedStateHeading() {
      return this.toggleSwitcherActive ? 'Average' : 'Total';
    }
  },

  mounted() {
    this.getLeagueStandings();
    this.getCalculatedStandings();
  },

  methods: {
    ...mapActions(['getLeagueStandings']),

    getCalculatedStandings() {
      if (this.leagueTable) {
        return this.leagueTable.forEach((item) => {
          item.total =
            (item.played * 1) + (item.won * 3) + (item.draw * 1) +
            (item.mom * 3) + (item.ps * 1) + (item.late * -1) + (item.doOut * -1);

          item.ave = Math.round((item.total / item.played) * 10 ) / 10;
        });
      }
      return false;
    },

    onToggleSwitcherState() {
      this.toggleSwitcherActive = !this.toggleSwitcherActive;
    }
  }
};
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:nth-child(2) {
    background-color: #42b983;
  }

  tr:nth-child(3) {
    background-color: #b1ecd2;
  }

  tr:hover, tr:focus {
     background-color: #d2d2d2;
  }

.table-heading {
  clear: both;
  overflow: hidden;
  margin-bottom: 0;
  padding: 0;
}

.table-stats {
  margin: 0;
  overflow: hidden;
  padding: 0;
}

.table-stats li,
.table-heading li {
  list-style:none;
  float:left;
  padding: 5px 10px;
  border: 1px solid #eee;
}

input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 200px;
  height: 100px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}
</style>
