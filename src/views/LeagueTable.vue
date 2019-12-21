<template>
  <div>
    <div>
      <a class="recent-results" href="#" @click="show">See most recent match details</a>
    </div>
    <h1 :class="[{ 'stickyHeader': !headerIsVisible }]">
        {{ getCurrentSelectedLeagueDay }} league table
    </h1>

    <div class="container">
      <div class="l-col">
        <input type="checkbox" id="switch" />
        <label for="switch" @click="onToggleSwitcherState">
          <span>Average</span>
          <span>Total</span>
        </label>
      </div>
    </div>

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
        <th v-if="isLoyalityEnabled">Loy</th>
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
                player: item.player,
                won: item.won,
                lost: item.lost,
                mom: item.mom,
                total: item.total,
                ave: item.ave
              },
              props: true }"
              >
              {{ item.player }}
            </router-link>
          </td>
          <td>{{ item.played }}</td>
          <td>{{ item.won }}</td>
          <td>{{ item.draw }}</td>
          <td>{{ item.lost }}</td>
          <td>{{ item.ps }}</td>
          <td>{{ item.doOut }}</td>
          <td v-if="isLoyalityEnabled">1</td>
          <td>{{ item.late }}</td>
          <td>{{ item.mom }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.ave }}</td>
      </tr>
    </table>

    <match-details />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import MatchDetails from '@/components/ModalMatchDetails.vue';

export default {
  components: {
    MatchDetails,
  },

  data: () => ({
    toggleSwitcherActive: true,
  }),

  computed: {
    ...mapState(['leagueTable', 'headerIsVisible']),

    ...mapGetters([
      'sortByAverage',
      'sortByTotal',
    ]),

    sortedLeagueStandings() {
      if (this.leagueTable) {
        return this.toggleSwitcherActive
          ? this.sortByAverage
          : this.sortByTotal;
      }

      return false;
    },

    getSwitchedStateHeading() {
      return this.toggleSwitcherActive ? 'Average' : 'Total';
    },

    getCurrentSelectedLeagueDay() {
      const { day } = this.$route.params;
      return `${day.charAt(0).toUpperCase() + day.slice(1)}'s`;
    },

    isLoyalityEnabled() {
      const { day } = this.$route.params;

      return day === 'thursday';
    },
  },

  mounted() {
    this.getLeagueStandings(this.$route.params.day);
    this.getCalculatedStandings();
  },

  methods: {
    ...mapActions(['getLeagueStandings']),

    getCalculatedStandings() {
      if (this.leagueTable) {
        return this.leagueTable.forEach((item) => {
          // eslint-disable-next-line
          item.total = (item.played * 1) + (item.won * 3) + (item.draw * 1)
             + (item.mom * 3) + (item.ps * 2) + (item.late * -1) + (item.doOut * -1);

          // eslint-disable-next-line
          item.ave = Math.round((item.total / item.played) * 10) / 10;
        });
      }
      return false;
    },

    onToggleSwitcherState() {
      this.toggleSwitcherActive = !this.toggleSwitcherActive;
    },

    show() {
      this.$modal.show('match-details');
    },

    hide() {
      this.$modal.hide('match-details');
    },
  },
};
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
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
  width: 200px;
  height: 60px;
  background: #42b983;
  display: block;
  border-radius: 100px;
  position: relative;
  border: 1px solid rgba(0,0,0,0.2);
}

label span {
  position: absolute;
  top: 33%;
  right: 36px;
  z-index: 9;
}

label span:first-child {
  left: 24px;
  text-align: left;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100px;
  height: 50px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}

.container {
  overflow: hidden;
  clear: both;
}

.recent-results {
  display: block;
  background-color: #42b983;
  color: white;
  padding: 4px 35px;
  font-size: 12px;
  transition: all 500ms;
}

.recent-results:before {
  content: '';
  background: url("../assets/ball.svg") no-repeat;
  width: 15px;
  height: 15px;
  background-size: contain;
  position: absolute;
  right: 10px;
}

.recent-results:hover,
.recent-results:focus  {
  background-color: #14804f;
  text-decoration: none;
}

@media (min-width: 48em) {
  .l-col {
    float: left;
    margin-left: 20px;
  }

  .recent-results {
    text-align: right;
  }
}
</style>
