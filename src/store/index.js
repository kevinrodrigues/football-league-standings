import Vue from 'vue';
import Vuex from 'vuex';
import leagueResults from '../services/standings/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagueTable: null,
    headerIsVisible: false,
  },
  actions: {
    getLeagueStandings: ({ commit }, payload) => {
      const leagueStandingsResponse = leagueResults.getLeagueResults(payload);

      if (leagueStandingsResponse) {
        commit('getLeagueStandings', leagueStandingsResponse);
      }
    },

    setHeaderVisibility: ({ commit }, payload) => {
      commit('setHeaderVisibility', payload);
    },
  },
  mutations: {
    getLeagueStandings(state, payload) {
      state.leagueTable = payload;
    },

    setHeaderVisibility(state, payload) {
      state.headerIsVisible = payload;
    },
  },
  getters: {
    sortByAverage: ({ leagueTable }) => leagueTable.sort((a, b) => b.ave - a.ave),

    sortByTotal: ({ leagueTable }) => leagueTable.sort((a, b) => b.total - a.total),
  },
});
