<template>
  <div>
    <div>
      <button class="recent-results animate-flicker" @click="showRecentGame">
        Check {{ getCurrentSelectedLeagueDay }} match results
      </button>
    </div>

    <h1 :class="[{ 'stickyHeader': !headerIsVisible }]">
        {{ getCurrentSelectedLeagueDay }} league table
    </h1>

    <div class="container toggle-switch">
      <div class="l-col">
        <input type="checkbox" id="switch" />
        <label for="switch" @click="onToggleSwitcherState">
          <span>Total</span>
          <span>Average</span>
        </label>
      </div>
    </div>

    <h3>{{ getSwitchedStateHeading }}</h3>
    <!-- TODO: pull from build config -->
    <p class="font-small">Last updated: <strong>05/02/2020 at 09:02</strong></p>

    <div class="filter-wrapper">
      <button @click="onFilterPlayerOpened" class="filter-search">Filter table by player</button>
    </div>

    <div v-if="isFilterOverlayOpen" class="search-overlay block">
      <h3>Filter table by player</h3>
      <button @click="onFilterPlayerClosed" class="search-overlay-close">X</button>
      <div class="centered">
        <div class="search-box">
          <form class="search-form">
              <input type="text" v-model="search"/>
              <button
                v-if="isPlayerSearchPopulated"
                class="clear-player-search"
                type="button"
                @click="clearPlayerSearch">
                <span>x</span>
              </button>
              <button class="search-player-button" type="button" @click="onFilterApplied">
                <span>Apply</span>
              </button>
          </form>
        </div>
      </div>
    </div>

    <table>
      <tr class="table-heading">
        <th>Player</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th class="hideBelowMid">PS</th>
        <th class="hideBelowMid">DO</th>
        <th v-if="isLoyalityEnabled" class="hideBelowMid">Loy</th>
        <th class="hideBelowMid">Late</th>
        <th v-if="isMomCountEnabled">Vs</th>
        <th>MoM</th>
        <th>Tot</th>
        <th>Ave</th>
      </tr>

      <tr v-for="item in filteredPlayers"
          :key="item.id"
          class="table-stats">
          <td>
            <router-link
              :to="{ path: 'player-bio',
              name: 'player-bio',
              params: {
                player: item.player,
                played: item.played,
                won: item.won,
                lost: item.lost,
                draw: item.draw,
                mom: item.mom,
                votes: item.votes,
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
          <td class="hideBelowMid">{{ item.ps }}</td>
          <td class="hideBelowMid">{{ item.doOut }}</td>
          <td v-if="isLoyalityEnabled" class="hideBelowMid">{{ item.loy }}</td>
          <td class="hideBelowMid">{{ item.late }}</td>
          <td v-if="isMomCountEnabled">{{ item.votes }}</td>
          <td>{{ item.mom }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.ave }}</td>
      </tr>
    </table>

    <match-details
    :number="getMatchNumber"
    :finalScore="getFinalScore"
    :mom="getMom"
    :teamSheets="getTeamSheets"
    :fines="getPlayerFines" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import MatchDetails from '@/components/ModalMatchDetails.vue';
import { MATCH_DETAILS } from '../constants';

export default {
  components: {
    MatchDetails,
  },

  data: () => ({
    toggleSwitcherActive: true,
    search: '',
    isFilterOverlayOpen: false,
  }),

  computed: {
    ...mapState([
      'leagueTable',
      'headerIsVisible',
      'lastMatchDetails',
    ]),

    ...mapGetters([
      'sortByAverage',
      'sortByTotal',
      'getMom',
      'getFinalScore',
      'getTeamSheets',
      'getPlayerFines',
      'getMatchNumber',
    ]),

    sortedLeagueStandings() {
      if (this.leagueTable) {
        return this.toggleSwitcherActive
          ? this.sortByTotal
          : this.sortByAverage;
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

    isMomCountEnabled() {
      const { day } = this.$route.params;

      return day === 'tuesday';
    },

    filteredPlayers() {
      if (this.sortedLeagueStandings.length) {
        return this.sortedLeagueStandings
          .filter(player => player.player.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
      }

      return false;
    },

    isPlayerSearchPopulated() {
      return this.search.length > 0;
    },
  },

  mounted() {
    this.getLeagueStandings(this.$route.params.day);
    this.getCalculatedStandings();
  },

  methods: {
    ...mapActions([
      'getLeagueStandings',
      'getLastMatchDetails',
    ]),

    getCalculatedStandings() {
      if (this.leagueTable) {
        return this.leagueTable.forEach((item) => {
          // eslint-disable-next-line
          item.total = (item.played * 1) + (item.won * 3) + (item.draw * 1)
             + (item.mom * 3) + (item.ps * 2) + (item.loy ? item.loy * 1 : 0)
             + (item.late * -1) + (item.doOut * -1);

          // eslint-disable-next-line
          item.ave = Math.round((item.total / item.played) * 10) / 10;
        });
      }
      return false;
    },

    onToggleSwitcherState() {
      this.toggleSwitcherActive = !this.toggleSwitcherActive;
    },

    showRecentGame() {
      this.getLastMatchDetails(this.$route.params.day);
      this.$modal.show(MATCH_DETAILS, {
        title: 'Alert',
        buttons: [
          {
            title: 'Tuesday',
          },
        ],
      });
    },

    hide() {
      this.$modal.hide(MATCH_DETAILS);
    },

    onFilterPlayerOpened() {
      this.isFilterOverlayOpen = true;
    },

    onFilterApplied() {
      this.isFilterOverlayOpen = false;
    },

    onFilterPlayerClosed() {
      this.isFilterOverlayOpen = false;
    },

    clearPlayerSearch() {
      this.search = '';
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

.font-small {
  font-size: 12px;
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

.toggle-switch input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

.toggle-switch label {
  cursor: pointer;
  width: 200px;
  height: 60px;
  background: #42b983;
  display: block;
  border-radius: 100px;
  position: relative;
  border: 1px solid rgba(0,0,0,0.2);
}

.toggle-switch label span {
  position: absolute;
  top: 33%;
  right: 22px;
  z-index: 9;
}

.toggle-switch label span:first-child {
  left: 35px;
  text-align: left;
}

.toggle-switch label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100px;
  height: 50px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
  box-shadow: 1px 0 6px 0px #333;
}

.toggle-switch input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

.toggle-switch label:active:after {
  width: 100px;
}

.container {
  overflow: hidden;
  clear: both;
}

.recent-results {
  position: relative;
  display: block;
  background-color: #262626;
  color: white;
  padding: 10px 35px;
  font-size: 12px;
  transition: all 500ms;
  width: 100%;
  border: none;
}

.recent-results:before {
   content: "";
   display: inline-block;
   width: 0.4em;
   height: 0.4em;
   border-top: 0.15em solid #fff;
   border-right: 0.15em solid #fff;
   position: absolute;
   top: 50%;
   right: 20px;
   transform: translateY(-50%) rotate(45deg);
 }

@keyframes flickerAnimation {
  0%   { right: 20px; }
  50%  { right: 10px; }
  100% { right: 20px; }
}

.animate-flicker:before {
  animation: flickerAnimation 1s infinite;
}

.recent-results:hover,
.recent-results:focus  {
  background-color: #14804f;
  text-decoration: none;
  cursor: pointer;
}

.hideBelowMid {
  display: none;
}

@media (min-width: 30em) {
  .hideBelowMid {
    display: table-cell;
  }
}

@media (min-width: 48em) {
  .recent-results {
    text-align: right;
  }
}

.search-overlay h3 {
  color: #fff;
  margin-top: 15%;
}

.search-overlay-close {
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 25px;
}

.block {
  position: fixed;
  top: 0;
  right: 0;
  bottom:0 ;
  left: 0;
  overflow: auto;
  text-align: center;
  background: #000;
  margin: 0;
  z-index: 999;
}

.centered {
  display: inline-block;
  vertical-align: middle;
  width: 70%;
  padding: 10px 15px;
  color: #FFF;
  border: none;
  background: transparent;
}

.search-box {
  position: relative;
  width: 100%;
  margin: 0;
}

.search-form {
  height: 4em;
  border: 1px solid #999;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-color: #fff;
  overflow: hidden;
}

.search-text {
  font-size: 14px;
  color: #ddd;
  border-width: 0;
  background: transparent;
}

.search-box input[type="text"] {
  width: 51%;
  padding: 20px;
  color: #333;
  outline: none;
  font-size: 1.4em;
  border: none;
  float: left;
}

.search-player-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 4.7em;
  width: 100px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  border-width: 0;
  background-color: #4d90fe;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
}

.filter-search:hover,
.filter-search:focus {
  cursor: pointer;
  transform: scale(1.1);
}

.filter-wrapper {
  position: fixed;
  right: 0;
  background-color:#42b983;
  padding: 5px;
  border: 1px solid rgba(0,0,0, 0.5);
}

.filter-search {
  background: transparent url("../assets/filter.svg") no-repeat;
  text-indent: -999em;
  width: 30px;
  height: 30px;
  border: none;
  transition: all 200ms;
  float: right;
}

.clear-player-search {
  position: absolute;
  top: 20px;
  right: 106px;
  font-size: 18px;
  color: #777;
  background-color: transparent;
  border: none;
}
</style>
