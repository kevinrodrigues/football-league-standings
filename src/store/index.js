import Vue from 'vue';
import Vuex from 'vuex';
import leagueResults from '../services/standings/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagueTable: null,
  },
  actions: {
    getLeagueStandings: ({ commit }) => {
      const leagueStandingsResponse = leagueResults.getLeagueResults();

      if (leagueStandingsResponse) {
        commit('getLeagueStandings', leagueStandingsResponse);
      }
    },
  },
  mutations: {
    getLeagueStandings(state, payload) {
      state.leagueTable = payload;
    },
  },
  getters: {
    sortByAverage: ({ leagueTable }) => leagueTable.sort((a, b) => b.ave - a.ave),

    sortByTotal: ({ leagueTable }) => leagueTable.sort((a, b) => b.total - a.total),
  },
});
